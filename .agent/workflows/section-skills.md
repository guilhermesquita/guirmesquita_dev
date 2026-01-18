---
description: Implementar um componente de Skills
---

### Contexto
- O componente deve exibir habilidades (skills) organizadas em três categorias:
 - Frontend
 - Backend
 - Outros
A categoria inicial deve ser sempre Frontend.

## Mockup
desktop: <img src="https://i.imgur.com/QrScvGB.png" alt="desktop" />
mobile: <img src="https://i.imgur.com/dFbPgLT.png" alt="mobile" />

## Desktop
1. **Navegação e Comportamento**
   - Deve existir uma navegação entre as categorias Frontend, Backend e Outros, conforme o mockup.
   - Ao carregar o componente, a categoria Frontend deve estar ativa por padrão.
   - O usuário pode mudar de categoria de duas formas:
    - Clicando diretamente na categoria desejada.
    - Fazendo scroll vertical.
   - Durante o scroll vertical:
    - As tecnologias da categoria ativa devem ser listadas progressivamente.
    - Ao finalizar a listagem de uma categoria, o componente deve transicionar automaticamente para a próxima categoria.
    - A navegação deve refletir visualmente qual categoria está ativa no momento.

## Mobile
1. **Navegação**
   - Deve existir uma navegação entre as categorias Frontend, Backend e Outros, conforme o mockup..
   - A categoria inicial deve ser sempre Frontend.
   - A mudança de categoria deve ocorrer apenas via clique (não via scroll).
2. **Conteúdo**
   - Cada categoria deve possuir um carrossel horizontal de tecnologias (um carrossel por categoria).
3. **Indicador de Categoria (Slider Dots)**
   - Deve existir um indicador de categorias (slider dots) com três pontos:
    - Um ponto para cada categoria.
    - O ponto da categoria ativa deve:
     - Ter cor azul
     - Ter ``width: 1.3125rem``
    - Os pontos das categorias inativas devem:
     - Ter cor cinza
     - Manter o formato de ponto (width menor)