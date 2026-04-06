# O Preço da Ordem - Game Prototype

Um protótipo de jogo 2D em desenvolvimento baseado no primeiro capítulo do livro "O Preço da Ordem".

## 📖 Sobre o Projeto

Este é um jogo de furtividade 2D que segue a história de **Horácio**, um personagem que precisa sobreviver nas ruas de Bravuna, uma cidade distópica e poluída. O jogo implementa mecânicas de:

- **Movimentação e Pulo**: Navegação fluida pelo cenário
- **Sistema de Furtividade**: Agachamento para se esconder em zonas de sombra
- **Indicador de Visibilidade**: Feedback visual em tempo real sobre o estado de exposição do personagem
- **Física Realista**: Gravidade e colisão com o ambiente

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Game Engine**: Phaser.js 3.90
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm

## 🚀 Como Rodar

### Instalação

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

O jogo estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
```

## 🎮 Controles

| Ação | Tecla |
|------|-------|
| Mover Esquerda | ← |
| Mover Direita | → |
| Pular | ESPAÇO |
| Agachar/Esconder | SHIFT |

## 📁 Estrutura do Projeto

```
├── client/
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── components/  # Componentes React (GameScene)
│   │   ├── pages/       # Páginas
│   │   ├── App.tsx      # Componente raiz
│   │   └── index.css    # Estilos globais
│   └── index.html       # HTML principal
├── server/              # Servidor Express (placeholder)
├── package.json         # Dependências
└── vite.config.ts       # Configuração do Vite
```

## 🎨 Design

O jogo utiliza uma paleta de cores escura e sombria para refletir a atmosfera distópica de Bravuna:

- **Fundo**: `#0f0f1e` (preto profundo)
- **Chão**: `#2d2d44` (cinza escuro)
- **Sombras**: Zonas de furtividade com transparência

## 🔄 Roadmap

- [ ] Adicionar inimigo (drone patrulhador)
- [ ] Sistema de pontuação e vidas
- [ ] Múltiplos níveis/becos
- [ ] Animações de movimento
- [ ] Efeitos sonoros
- [ ] Diálogos narrativos

## 📝 Notas de Desenvolvimento

Este protótipo foi desenvolvido usando **Phaser.js** para permitir rápida prototipagem e validação de mecânicas. Para conversão para um jogo de PC standalone, as opções recomendadas são:

1. **Electron + Phaser**: Mantém o código JavaScript
2. **Godot Engine**: Melhor performance e profissionalismo

## 📄 Licença

Todos os direitos reservados ao autor do livro "O Preço da Ordem".

## 👤 Desenvolvedor

Prototipado com Manus AI

---

**Status**: Em desenvolvimento 🚧
