import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const GameScene = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    // Criar a cena do jogo
    class MainScene extends Phaser.Scene {
      private player?: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
      private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
      private isHiding: boolean = false;
      private shadowZones: Phaser.Physics.Arcade.Sprite[] = [];
      private visibilityText?: Phaser.GameObjects.Text;
      private instructionsText?: Phaser.GameObjects.Text;

      constructor() {
        super({ key: 'MainScene' });
      }

      preload() {
        // Não precisamos carregar imagens externas para testar a física
      }

      create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Fundo - céu de Bravuna (escuro e poluído)
        this.cameras.main.setBackgroundColor(0x0f0f1e);

        // Chão
        const ground = this.add.rectangle(width / 2, height - 50, width, 100, 0x2d2d44);
        this.physics.add.existing(ground, true);

        // Criar sombras (zonas de furtividade)
        this.createShadow(150, height - 100, 120, 100, 'shadowTexture1');
        this.createShadow(width - 150, height - 100, 120, 100, 'shadowTexture2');
        this.createShadow(width / 2, height - 100, 80, 100, 'shadowTexture3');

        // Criar o personagem como um RETÂNGULO simples (azul) para teste de física
        // Parâmetros: x, y, largura, altura, cor
        const playerRect = this.add.rectangle(width / 2, height - 150, 32, 48, 0x3498db);
        this.physics.add.existing(playerRect);
        
        this.player = playerRect as any;
        this.player.body.setCollideWorldBounds(true);
        this.player.body.setBounce(0.2, 0.2);

        // Configurar colisão com o chão
        this.physics.add.collider(this.player, ground);

        // Cursores
        this.cursors = this.input.keyboard?.createCursorKeys();

        // Controle de agachar
        this.input.keyboard?.on('keydown-SHIFT', () => {
          this.isHiding = true;
          this.player?.setFillStyle(0x2c3e50); // Escurece o retângulo ao agachar
        });

        this.input.keyboard?.on('keyup-SHIFT', () => {
          this.isHiding = false;
          this.player?.setFillStyle(0x3498db); // Volta à cor original
        });

        // Textos
        this.instructionsText = this.add.text(10, 10, '', {
          fontSize: '14px',
          color: '#00ff00',
          fontFamily: 'monospace',
        });

        this.visibilityText = this.add.text(10, 40, '', {
          fontSize: '14px',
          color: '#ff0000',
          fontFamily: 'monospace',
        });

        this.add.text(width / 2, 20, 'O PREÇO DA ORDEM - Teste de Física', {
          fontSize: '18px',
          color: '#ffffff',
          fontFamily: 'Arial',
          align: 'center',
        }).setOrigin(0.5, 0);

        this.add.text(10, height - 30, 'Controles: ← → Mover | ESPAÇO Pular | SHIFT Agachar', {
          fontSize: '12px',
          color: '#cccccc',
          fontFamily: 'monospace',
        });
      }

      private createShadow(x: number, y: number, w: number, h: number, textureKey: string) {
        const shadowGraphics = this.make.graphics({ x: 0, y: 0 });
        shadowGraphics.fillStyle(0x0a0a0f, 0.6);
        shadowGraphics.fillRect(0, 0, w, h);
        shadowGraphics.generateTexture(textureKey, w, h);
        shadowGraphics.destroy();

        const shadow = this.physics.add.sprite(x, y, textureKey);
        shadow.setDisplaySize(w, h);
        if (shadow.body) {
          shadow.body.setAllowGravity(false);
          shadow.body.moves = false;
        }
        this.shadowZones.push(shadow);
      }

      update() {
        if (!this.player || !this.cursors) return;

        const speed = 200;

        // Movimento
        if (this.cursors.left?.isDown) {
          this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right?.isDown) {
          this.player.body.setVelocityX(speed);
        } else {
          this.player.body.setVelocityX(0);
        }

        // Pulo
        if (this.cursors.space?.isDown && this.player.body.touching.down) {
          this.player.body.setVelocityY(-350);
        }

        // Verificar sombra
        let inShadow = false;
        for (const shadow of this.shadowZones) {
          const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            shadow.x,
            shadow.y
          );
          if (distance < 80) {
            inShadow = true;
            break;
          }
        }

        // Atualizar visibilidade
        let visibilityStatus = 'VISIBILIDADE: ';
        let visibilityColor = '#ff0000';

        if (this.isHiding && inShadow) {
          visibilityStatus += 'ESCONDIDO (SEGURO)';
          visibilityColor = '#00ff00';
        } else if (this.isHiding) {
          visibilityStatus += 'AGACHADO (PARCIALMENTE SEGURO)';
          visibilityColor = '#ffff00';
        } else {
          visibilityStatus += 'EXPOSTO (PERIGO!)';
          visibilityColor = '#ff0000';
        }

        if (this.visibilityText) {
          this.visibilityText.setText(visibilityStatus);
          this.visibilityText.setColor(visibilityColor);
        }

        if (this.instructionsText) {
          this.instructionsText.setText(
            `Posição: ${Math.round(this.player.x)}, ${Math.round(this.player.y)}\n` +
            `Velocidade: ${Math.round(this.player.body.velocity.x || 0)}`
          );
        }
      }
    }

    // Config
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 500 }, // Aumentei um pouco a gravidade para um teste mais nítido
          debug: false,
        },
      },
      scene: MainScene,
      parent: gameContainerRef.current,
      render: {
        pixelArt: true,
        antialias: false,
      },
      canvas: (() => {
        const canvas = document.createElement('canvas');
        canvas.style.display = 'block';
        return canvas;
      })(),
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={gameContainerRef}
      className="w-full h-screen flex items-center justify-center bg-black"
    />
  );
};

export default GameScene;
