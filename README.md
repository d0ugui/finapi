### 📖 Projeto

O projeto consiste em uma API que foi construída no curso de Node.js da Rocketseat. O projeto é resultado de aulas introdutórias quem apresentam e esclarecem os pílares do back-end. Foram apresentados os métodos de requisição (HTTP Verbs), HTTP Codes, parâmetros das requisições (Header Params, Query Params, Route Params e Body Params), os conceitos de Middlewares e API Rest também foram difundidos.

### 🎲 Rodando a API (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/d0ugui/finapi.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd finapi

# Instale as dependências
$ npm install OR yarn

# Execute a aplicação em modo de desenvolvimento
$ npm dev OR yarn dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)

---

### Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário dos clientes
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível deleter uma conta
- [x] Deve ser possível retorna o balance

---

### Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [x] Não deve ser possível excluir uma conta não existente

### 📝 License

Esse projeto está sob a licença MIT.
