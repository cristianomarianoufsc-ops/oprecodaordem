# 🎮 O Preço da Ordem - Game Prototype v0.1.0
## Handover Document para Próximos Agentes

**Data:** 06 de Abril de 2026  
**Versão:** v0.1.0 (Protótipo Inicial)  
**Status:** ✅ Funcional - Pronto para Expansão  
**Backup:** Branch `v0.1.0-backup` no GitHub

---

## 📋 Resumo Executivo

Este é um **protótipo de jogo 2D em Phaser.js** baseado no primeiro capítulo do livro "O Preço da Ordem" de Cristiano Mariano. O jogo implementa as mecânicas básicas de furtividade e sobrevivência do personagem Horácio nas ruas de Bravuna.

### O que está implementado:
- ✅ Personagem Horácio com sprite em pixel art
- ✅ Movimentação fluida (esquerda/direita/pulo)
- ✅ Sistema de furtividade com zonas de sombra
- ✅ Indicador de visibilidade em tempo real
- ✅ Física realista com gravidade e colisão
- ✅ Interface de controles e status

### O que ainda falta:
- ⏳ Drone inimigo com IA
- ⏳ Sistema de pontuação e vidas
- ⏳ Múltiplos níveis/cenários
- ⏳ Animações de movimento
- ⏳ Efeitos sonoros e trilha sonora
- ⏳ Narrativa integrada

---

## 🎯 Objetivo do Projeto

Adaptar o primeiro capítulo ("Linhas Invisíveis") do livro para um jogo interativo que capture:
- A tensão e desespero da perseguição
- A crítica social sobre desigualdade e opressão
- A mecânica de furtividade como forma de sobrevivência
- A atmosfera distópica de Bravuna

---

## 🛠️ Stack Tecnológico

| Componente | Tecnologia |
|-----------|-----------|
| **Engine** | Phaser.js 3.90 |
| **Frontend** | React 19 + TypeScript |
| **Build** | Vite |
| **Styling** | Tailwind CSS 4 |
| **Package Manager** | pnpm |
| **Hospedagem** | Manus (https://preco-game-mwqa3zka.manus.space) |
| **Versionamento** | GitHub (cristianomarianoufsc-ops/oprecodaordem) |

---

## 📁 Estrutura do Projeto

```
oprecodaordem/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/
│   │   │   └── GameScene.tsx    # ⭐ Componente principal do jogo
│   │   ├── pages/
│   │   │   └── Home.tsx         # Página que renderiza o jogo
│   │   ├── App.tsx              # Roteador principal
│   │   └── index.css            # Estilos globais
│   └── index.html
├── server/                  # Placeholder (não usado em v0.1.0)
├── docs/
│   ├── HANDOVER.md          # Este arquivo
│   ├── CAPITULO_1.md        # Texto do capítulo 1
│   ├── GAME_DESIGN.md       # Documento de design detalhado
│   └── sprites/
│       └── horacio_sprite.png   # Sprite do personagem
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 🎮 Controles do Jogo

| Ação | Tecla |
|------|-------|
| Mover Esquerda | ← (Seta Esquerda) |
| Mover Direita | → (Seta Direita) |
| Pular | ESPAÇO |
| Agachar/Esconder | SHIFT |

---

## 🎨 Sprite do Personagem

O sprite do Horácio foi gerado em **pixel art** com as seguintes características:
- **Poses:** Parado, caminhando, pulando
- **Estilo:** Retro 2D com paleta escura
- **Detalhes:** Capuz cobrindo a cabeça, roupas degradadas, expressão tensa
- **Arquivo:** `docs/sprites/horacio_sprite.png`

**URL do CDN:** 
```
https://d2xsxph8kpxj0f.cloudfront.net/310519663448694013/mwQa3zkAafzx8pm36XuBg5/horacio_sprite-iNLDBepAvrbQTWkBVxaKnf.webp
```

---

## 🔧 Como Rodar Localmente

### Instalação
```bash
git clone https://github.com/cristianomarianoufsc-ops/oprecodaordem.git
cd oprecodaordem
pnpm install
```

### Desenvolvimento
```bash
pnpm dev
```
Acesse em `http://localhost:3000`

### Build para Produção
```bash
pnpm build
```

---

## 📚 Documentação Importante

### 1. **CAPITULO_1.md**
Contém o texto completo do primeiro capítulo do livro. Essencial para entender a narrativa e o contexto do jogo.

### 2. **GAME_DESIGN.md**
Documento detalhado com:
- Análise narrativa e temática
- Mecânicas de jogabilidade propostas
- Estilo visual e sonoro
- Estrutura do nível
- Roadmap de features

### 3. **GameScene.tsx**
Arquivo principal do jogo. Contém:
- Configuração do Phaser
- Lógica de movimentação
- Sistema de furtividade
- Indicador de visibilidade
- Física e colisão

### 4. **TROUBLESHOOTING.md**
Documento essencial para resolver erros técnicos comuns, como falhas de renderização (Canvas vs WebGL) e carregamento de sprites.

---

## 🚀 Próximos Passos (Roadmap)

### Fase 2: Inimigo e Mecânica de Perseguição
1. Implementar drone inimigo com IA
2. Criar cone de visão do drone
3. Sistema de detecção e perseguição
4. Efeitos visuais de alerta

### Fase 3: Sistema de Pontuação
1. Adicionar vidas/saúde
2. Sistema de pontos
3. Game Over e restart
4. Feedback visual de dano

### Fase 4: Expansão de Conteúdo
1. Múltiplos níveis/becos
2. Novos tipos de obstáculos
3. Interações com ambiente
4. Progressão narrativa

### Fase 5: Polish e Áudio
1. Animações de movimento
2. Trilha sonora
3. Efeitos sonoros
4. Diálogos/narrativa

---

## 🐛 Problemas Conhecidos e Soluções

Consulte o arquivo **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** para detalhes técnicos sobre erros de renderização e carregamento de ativos.

### Destaques:
- **Erro de Renderização:** Sempre use `Phaser.CANVAS` para máxima compatibilidade em ambientes virtuais.
- **Sprites Externos:** Use retângulos (`add.rectangle`) para testes de física se as imagens externas falharem.

---

## 📊 Métricas de Desenvolvimento

| Métrica | Valor |
|---------|-------|
| Tempo de Desenvolvimento | ~2 horas |
| Linhas de Código (GameScene) | ~200 |
| Dependências Principais | 3 (Phaser, React, Tailwind) |
| Tamanho do Build | ~500KB |
| Performance | 60 FPS (Chrome/Firefox) |

---

## 🔐 Informações de Acesso

### GitHub
- **Repositório:** https://github.com/cristianomarianoufsc-ops/oprecodaordem
- **Branch Principal:** `main` (desenvolvimento)
- **Branch Backup:** `v0.1.0-backup` (congelado)

### Hospedagem
- **URL:** https://preco-game-mwqa3zka.manus.space
- **Plataforma:** Manus
- **Status:** Ativo e sincronizado com `main`

---

## 💡 Dicas para o Próximo Agente

1. **Leia o capítulo 1 primeiro** (`CAPITULO_1.md`) para entender a narrativa
2. **Estude o Game Design Document** (`GAME_DESIGN.md`) para ver a visão completa
3. **Comece pelo GameScene.tsx** - é onde toda a lógica do jogo está
4. **Use o Phaser 3 Docs** - documentação excelente em https://photonstorm.github.io/phaser3-docs/
5. **Teste frequentemente** - o jogo está em `http://localhost:3000` durante desenvolvimento
6. **Mantenha o backup** - não delete o branch `v0.1.0-backup`

---

## 📞 Contato e Suporte

Para dúvidas sobre o projeto:
1. Verifique a documentação em `/docs`
2. Consulte os comentários no código (`GameScene.tsx`)
3. Revise o Game Design Document
4. Teste o protótipo em https://preco-game-mwqa3zka.manus.space

---

## ✅ Checklist para Continuação

- [ ] Ler CAPITULO_1.md
- [ ] Ler GAME_DESIGN.md
- [ ] Clonar o repositório
- [ ] Rodar `pnpm install && pnpm dev`
- [ ] Testar o jogo em `http://localhost:3000`
- [ ] Revisar `GameScene.tsx`
- [ ] Planejar a próxima feature
- [ ] Criar branch para novas mudanças

---

**Última atualização:** 06 de Abril de 2026  
**Desenvolvido por:** Manus AI  
**Licença:** Todos os direitos reservados ao autor do livro "O Preço da Ordem"
