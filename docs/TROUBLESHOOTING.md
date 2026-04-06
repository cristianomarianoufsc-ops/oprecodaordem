# 🛠️ Solução de Problemas (Troubleshooting)

Este documento registra erros técnicos encontrados durante o desenvolvimento do protótipo e as soluções aplicadas para garantir a compatibilidade em diferentes ambientes.

## 1. Erro de Renderização (CreateRenderer)

### ❌ O Problema
Ao iniciar o jogo em certos navegadores ou ambientes virtuais, o Phaser falha ao tentar inicializar o renderizador WebGL, resultando em uma tela branca com uma pilha de erros (stack trace) ou o erro `CreateRenderer`.

**Sintomas:**
- Erro no console: `Uncaught TypeError: Cannot read properties of null (reading 'getContext')`
- Falha na função `boot` do Phaser.
- Tela de erro do React exibindo falhas no componente `GameScene`.

### ✅ A Solução
Forçar o Phaser a usar o modo **CANVAS** em vez de `AUTO` ou `WEBGL`. O modo Canvas é mais compatível com ambientes que não possuem aceleração de hardware completa ou suporte a WebGL 2.0.

**Como aplicar:**
No arquivo `GameScene.tsx`, altere a configuração do jogo:

```typescript
const config: Phaser.Types.Core.GameConfig = {
  // Alterar de Phaser.AUTO para Phaser.CANVAS
  type: Phaser.CANVAS, 
  // ... resto da configuração
};
```

---

## 2. Erro de Carregamento de Sprites Externos

### ❌ O Problema
Imagens carregadas de URLs externas podem falhar devido a políticas de CORS ou problemas de conectividade, exibindo um padrão de xadrez (placeholder de erro do Phaser).

### ✅ A Solução
Para testes de física e mecânicas básicas, utilize **GameObjects.Rectangle** em vez de sprites de imagem. Isso garante que o jogo funcione independentemente de ativos externos.

**Exemplo de uso:**
```typescript
const player = this.add.rectangle(x, y, width, height, color);
this.physics.add.existing(player);
```

---

**Última atualização:** 06 de Abril de 2026
