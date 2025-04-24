# 🧩 CRUD Fullstack com Node.js, React e MySQL

Este projeto é uma aplicação fullstack com funcionalidades completas de **CRUD (Create, Read, Update, Delete)** e **autenticação de usuários**, utilizando as tecnologias Node.js no back-end, React no front-end e MySQL como banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Back-end
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/) (ORM)
- [JWT](https://jwt.io/) para autenticação
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) para hash de senhas

### 💻 Front-end
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/) para requisições HTTP
- [React Router](https://reactrouter.com/) para navegação

---

## 📦 Instalação

### Backend

```bash
# Clone o repositório
git clone https://github.com/IgorFonseca7/Crud.git
cd backend

# Instale as dependências
npm install

# Configure o arquivo .env com as variáveis do banco de dados
cp .env.example .env

# Inicie o servidor
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Autenticação

- Cadastro e login de usuários
- Geração de tokens JWT
- Rotas protegidas
- Armazenamento seguro de senhas com bcrypt

---

## 📂 Estrutura do Projeto

```
/backend
├── controllers/
├── models/
├── routes/
└── server.js

/frontend
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
```

---

## 🧪 Funcionalidades

- 📋 Cadastro e login de usuários
- ✅ Validação de campos
- 🔐 Rotas privadas com autenticação
- ✏️ CRUD de entidades no sistema

---

## 📄 Licença

Este projeto está sob a licença MIT.
