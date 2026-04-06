# Documento de Design de Jogo: O Preço da Ordem - Capítulo 1

**Autor:** Manus AI
**Data:** 05 de Abril de 2026

## 1. Visão Geral do Projeto

A adaptação do primeiro capítulo do livro "O Preço da Ordem", intitulado "Linhas Invisíveis", para um jogo 2D oferece uma oportunidade única de imergir o jogador em uma narrativa distópica e opressiva. O jogo se propõe a ser uma experiência de plataforma com forte ênfase em furtividade e sobrevivência, capturando a essência da fuga desesperada do protagonista, Horácio, pelas ruas de Bravuna. A atmosfera sombria, a tensão constante e a crítica social presentes no texto original servirão como pilares para o design de mecânicas, estética visual e progressão narrativa.

O objetivo principal deste documento é detalhar como os elementos literários do capítulo podem ser traduzidos em mecânicas interativas, criando uma experiência envolvente que respeita e expande o universo criado por Cristiano Mariano.

## 2. Análise Narrativa e Temática

O capítulo de introdução estabelece um mundo onde a sobrevivência é um ato de resistência. A cidade de Bravuna é descrita como um ambiente hostil, onde o céu "apodrece" e as nuvens são "placas de fumaça". A divisão social é marcada por "linhas invisíveis", separando as áreas de controle estatal das "zonas mortas" onde a miséria se esconde.

Horácio, o protagonista, é um homem negro que perdeu tudo: emprego, moradia e apoio social. Ele se encontra na base da pirâmide social, tornando-se um alvo para o regime de Solmira, que busca "limpar" a cidade eliminando os indesejados. A narrativa aborda temas profundos como desumanização, injustiça social e racial, e a luta desesperada pela existência em um sistema que ativamente tenta apagá-lo.

O clímax do capítulo ocorre quando Horácio, em um momento de fúria e desespero, grita sua existência para o mundo, atraindo a atenção de um drone letal do Estado. A perseguição que se segue é o núcleo da ação que será adaptada para o jogo, culminando em um resgate inesperado que introduz a possibilidade de alianças e resistência organizada.

## 3. Mecânicas de Jogabilidade

A jogabilidade será centrada na tensão da perseguição e na necessidade de passar despercebido. O jogador controlará Horácio em um ambiente 2D de rolagem lateral, utilizando o cenário a seu favor para sobreviver.

### 3.1. Furtividade e Ocultação

A mecânica principal do jogo será a furtividade. Horácio não possui armas ou meios de combater os drones diretamente; sua única defesa é não ser visto. O jogador precisará utilizar as sombras, becos estreitos e entulhos espalhados por Bravuna para se esconder. 

Um sistema de "Visibilidade" será implementado, onde a exposição à luz ou o movimento em áreas abertas aumentará a chance de detecção. O drone, principal antagonista deste nível, possuirá um cone de visão (o "modo de escaneamento" mencionado no texto) que o jogador deve evitar a todo custo.

### 3.2. Movimentação e Parkour Urbano

A fuga de Horácio exige agilidade e reflexos rápidos. O jogo incorporará mecânicas de movimentação fluida, permitindo que o jogador corra, salte sobre obstáculos, escale grades e muros, e deslize por espaços apertados. A fluidez do movimento será crucial para manter o ritmo frenético da perseguição, contrastando com os momentos de tensão silenciosa quando Horácio precisa se esconder.

### 3.3. Interação com o Ambiente

O cenário de Bravuna não será apenas um pano de fundo, mas uma ferramenta de sobrevivência. O jogador poderá interagir com elementos do ambiente para criar distrações ou bloquear o caminho do drone. Por exemplo, derrubar uma pilha de caixas pode atrasar a perseguição, enquanto atirar uma pedra pode desviar a atenção do drone para outra direção.

A tabela abaixo resume as principais interações propostas:

| Ação do Jogador | Elemento do Cenário | Efeito na Jogabilidade |
| :--- | :--- | :--- |
| Esconder-se | Sombras, becos, entulhos | Reduz a visibilidade a zero; evita detecção. |
| Escalar | Grades, muros baixos | Acesso a rotas alternativas e elevações. |
| Deslizar | Espaços apertados, escadas quebradas | Passagem rápida por obstáculos baixos. |
| Distrair | Latas, pedras, objetos soltos | Desvia o cone de visão do drone temporariamente. |
| Bloquear | Caixas, portas velhas | Atrasa o avanço do drone, ganhando tempo. |

## 4. Estilo Visual e Sonoro

A estética do jogo deve refletir a opressão e a degradação de Bravuna, criando uma atmosfera imersiva que complementa a narrativa.

### 4.1. Direção de Arte

O estilo visual adotado será o *Pixel Art* de alta resolução ou arte 2D desenhada à mão, com uma paleta de cores focada em tons escuros, cinzas industriais e contrastes marcantes. O céu de Bravuna será representado com texturas densas e cores doentias, reforçando a ideia de um ambiente poluído e sem esperança.

O design de Horácio será focado em sua silhueta, frequentemente obscurecida pelo capuz, permitindo que ele se misture às sombras. Em contraste, os drones do Estado terão um design limpo, futurista e ameaçador, com luzes de escaneamento brilhantes (vermelhas ou azuis) que cortam a escuridão dos becos, criando um forte contraste visual entre o opressor e o oprimido.

### 4.2. Design de Áudio

O áudio desempenhará um papel fundamental na construção da tensão. A trilha sonora será minimalista, composta por tons graves e industriais, aumentando de intensidade durante a perseguição. 

Os efeitos sonoros serão realistas e impactantes: o zumbido constante e mecânico do drone, os passos apressados de Horácio ecoando nos becos, sua respiração ofegante, e os "cliques secos" das armas sendo preparadas. O silêncio também será usado como uma ferramenta narrativa, pontuando os momentos em que Horácio está escondido, prendendo a respiração enquanto o perigo passa perto.

## 5. Estrutura do Nível (Capítulo 1)

O primeiro nível do jogo servirá como um tutorial integrado à narrativa, guiando o jogador pelas mecânicas básicas antes de lançá-lo na perseguição principal.

1.  **Introdução (A Queda):** O jogo começa com Horácio caminhando pelas ruas de Bravuna. O jogador aprende os controles básicos de movimento enquanto observa a degradação da cidade e a hostilidade do ambiente. Monólogos internos (em forma de texto na tela) estabelecem o contexto de sua situação.
2.  **O Grito (O Catalisador):** O jogador chega a um ponto específico onde a frustração de Horácio atinge o limite. Uma ação contextual permite que o jogador acione o grito ("EU EXISTO!"). Isso atrai o drone, marcando o início da fase de ação.
3.  **A Perseguição (Sobrevivência):** O drone inicia o escaneamento. O jogador deve usar as mecânicas de furtividade e movimentação rápida para escapar. O nível é desenhado com múltiplas rotas, exigindo decisões rápidas (ex: pular um muro ou se esconder em um beco). Tiros começam a ser disparados, aumentando a urgência.
4.  **O Refúgio (O Clímax):** Horácio chega a um beco sem saída aparente. O drone se aproxima. O jogador deve encontrar o ponto exato de interação para se esconder. No último segundo, a animação do braço puxando Horácio para a parede é acionada, encerrando o nível com a passagem do drone e a introdução do novo aliado.

## 6. Conclusão

A adaptação do primeiro capítulo de "O Preço da Ordem" para um jogo 2D tem o potencial de criar uma experiência narrativa poderosa e mecanicamente tensa. Ao focar na furtividade, na atmosfera opressiva e na luta desesperada pela sobrevivência, o jogo pode traduzir com sucesso a visão de Cristiano Mariano para uma mídia interativa, convidando os jogadores a vivenciar a dura realidade de Bravuna e a faísca de resistência que nasce nas sombras.
