# 🛍️ Digital Store - Drip Store (Front-End)

Projeto de e-commerce desenvolvido como entrega do programa **Geração Tech**, seguindo fielmente o protótipo oficial no Figma.

## Tecnologias Utilizadas

- **React.js** (com Vite)
- **React Router DOM** (Roteamento SPA entre páginas)
- **CSS3** (Variáveis globais, Flexbox, CSS Grid e Media Queries para responsividade Mobile/Desktop)

## 📄 Páginas e Funcionalidades Implementadas

1. **Home (`/`)**:
   - Carrossel de banners principais (`<Gallery />`).
   - Seção de coleções em destaque (cards promocionais e navegação por ícones de categorias).
   - Vitrine de produtos em alta (`<ProductListing />` e `<ProductCard />`).
   - Banner de Oferta Especial (*Air Jordan edição de colecionador*).
2. **Listagem de Produtos (`/produtos`)**:
   - Filtro lateral dinâmico por Marca e Estado (`<FilterGroup />`).
   - Ordenação funcional por menor e maior preço.
   - Gaveta lateral (*Drawer*) de filtros exclusiva para dispositivos móveis.
3. **Detalhes do Produto (`/product/:id`)**:
   - Galeria interativa com miniaturas (`<Gallery showThumbs />`).
   - Bloco de compra (`<BuyBox />`) com seleção de tamanho e cor (`<ProductOptions />`).
   - Seção de produtos relacionados.

## 🔧 Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/GuilhermeLobo1/digital-store.git](https://github.com/GuilhermeLobo1/digital-store.git)
2. Acesse a pasta do projeto:
    ```bash
   cd digital-store
3. Instale as dependências:
    ```bash
    npm install
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
5. Acesse o servidor local no navegador:
    http://localhost:5173/
