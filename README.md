
# 🍽️ Restaurante API - Node.js + TypeScript + Knex

API RESTful para gerenciamento de produtos, pedidos e cardápio de um restaurante. Criada com **Node.js**, **Express**, **TypeScript** e **Knex** (Query Builder + Migrations).

<p align="center">
  <img src="./docs/images/banner-api.png" alt="Banner da API Restaurante" width="80%" />
</p>

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex.js](https://knexjs.org/)
- Banco de Dados: SQLite, PostgreSQL ou MySQL

---

## 🚀 Como executar o projeto

### ⚙️ Pré-requisitos

- Node.js instalado
- Git instalado
- SQLite ou outro banco de dados
- Yarn ou NPM

### 🔧 Instalação
# Clone o repositório
git clone https://github.com/seu-usuario/restaurante-api.git

# Acesse o diretório
cd restaurante-api

# Instale as dependências
npm install

# Copie o arquivo de exemplo das variáveis de ambiente
cp .env.example .env

🗃️ Rodando as Migrations
# Cria as tabelas no banco de dados
npx knex migrate:latest
⚠️ Certifique-se de que a conexão com o banco de dados está corretamente configurada no arquivo knexfile.ts.

<hr/>

🧪 Rotas da API
📋 Produtos
GET /products → Listar todos os produtos

GET /products/:id → Buscar um produto específico

POST /products → Criar um novo produto

PUT /products/:id → Atualizar um produto existente

DELETE /products/:id → Remover um produto

📥 Exemplo de Requisição:
POST /products
Content-Type: application/json

{
  "nome": "Pizza Margherita",
  "preco": 45.90
}

<hr/>

🧪 Exemplo no Postman
<p align="center"> <img src="./docs/images/postman-example.png" alt="Exemplo de uso no Postman" width="70%" /> </p>

🛠️ Melhorias Futuras
Autenticação com JWT

Upload de imagens dos produtos

Categorias e relacionamento com produtos

Painel administrativo

Testes automatizados com Jest

<hr/>

👨‍💻 Autor
Feito com 💚 por Breno Soriani
