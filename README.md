# 💼 SISPAR - Sistema de Solicitação de Reembolsos

O **SISPAR** é um sistema simples e eficiente para que colaboradores possam solicitar reembolsos de despesas realizadas em nome da empresa, como visitas a clientes utilizando meios próprios. As despesas reembolsáveis incluem **almoço**, **pedágio**, **estacionamento**, entre outras.

Este projeto foi desenvolvido utilizando **Vue.js 2** com foco na experiência do usuário e fácil integração com backend via Web API.

---

## 🚀 Funcionalidades

- ✅ Autenticação simulada (mockada), com preenchimento automático de login
- ✅ Criação e visualização de solicitações de reembolso
- ✅ Armazenamento temporário com **localStorage**
- ✅ Integração com **SheetDB API** para persistência dos dados
- ✅ Interface responsiva com **Bootstrap 5**

---

## 👤 Acesso de Demonstração

Use as credenciais abaixo para acessar o sistema:

* Login: marcos@email.com
* Senha: 123


> ⚠️ Os dados de login são preenchidos automaticamente após acesso, simulando o uso individualizado por funcionário.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- [Vue.js 2](https://v2.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap-Vue](https://bootstrap-vue.org/)
- [Axios](https://axios-http.com/)
- [uuid](https://github.com/uuidjs/uuid)
- [Sass](https://sass-lang.com/)

### Backend (via API)

- [SheetDB API](https://sheetdb.io/) – Conecta planilhas do Google como base de dados

---



## 📂 Estrutura de Pastas

```bash
sispar-vue/
├── public/               # Arquivos públicos (index.html, favicon, etc.)
├── src/                  # Código-fonte da aplicação
│   ├── assets/           # Imagens, ícones e arquivos estáticos
│   ├── components/       # Componentes reutilizáveis Vue
│   ├── router/           # Configurações de rotas (Vue Router)
│   ├── views/            # Páginas principais da aplicação
│   ├── App.vue           # Componente raiz
│   └── main.js           # Arquivo principal que inicia a aplicação
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto (este arquivo)

```

## 📦 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos com Yarn:

- `git clone https://github.com/Marcos-Monte/sispar-bootstrapvue`  
  Clona o repositório do projeto para sua máquina local.

- `cd sispar-vue`  
  Acessa o diretório do projeto clonado.

- `yarn install`  
  Instala todas as dependências listadas no `package.json`.

- `yarn serve`  
  Inicia o servidor de desenvolvimento com hot-reload.

- `yarn build`  
  Gera a versão otimizada para produção.

> 💡 Caso utilize `npm`, substitua os comandos acima por:  
> `npm install`, `npm run serve` e `npm run build`

## 📝 Observações

* O projeto ainda não possui autenticação real com múltiplos usuários.

* As solicitações são salvas inicialmente no **localStorage** e depois enviadas à SheetDB.

