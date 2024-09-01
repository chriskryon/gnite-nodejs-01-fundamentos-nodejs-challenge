<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

[![Node.js](https://img.shields.io/badge/node.js-16.14.2-green.svg)](https://nodejs.org/en/) [![JavaScript](https://img.shields.io/badge/javascript-ES6-brightgreen.svg)](https://developer.mozilla.org/eUS/docs/Web/JavaScript) [![csv-parse](https://img.shields.io/badge/csv-parse-blue.svg)](https://www.npmjs.com/package/csv-parse)

# Desafio Node.js - CRUD de Tarefas
- Desafio Node.js: API de Tarefas com CRUD e Importação via CSV

### Sobre o Projeto

Este projeto é uma solução para o desafio proposto no Ignite, onde foi desenvolvido uma API RESTful para gerenciar tarefas. A aplicação permite criar, ler, atualizar, deletar e importar tarefas em massa a partir de um arquivo CSV. 

**Características:**

* **CRUD completo:** Criação, leitura, atualização e deleção de tarefas.
* **Importação via CSV:** Importação de tarefas em massa a partir de um arquivo CSV utilizando o módulo `csv-parse`.
* **Banco de dados:** Utilização de um banco de dados em formato JSON para armazenar as tarefas, proporcionando flexibilidade e facilidade de manutenção.
* **Módulo HTTP:** Emprego do módulo HTTP nativo do Node.js para a criação do servidor e o tratamento das requisições.
* **Validação de dados:** Implementação de validações básicas para garantir a integridade dos dados.

### Tecnologias Utilizadas

## Tecnologias

* Node.js
* JavaScript
* **Node.js:** Plataforma de execução JavaScript fora do navegador.
* **Módulo HTTP:** Para a criação do servidor e o tratamento das requisições HTTP.
* **csv-parse:** Para o parsing de arquivos CSV.
* **JSON:** Utilizado como banco de dados para armazenar as tarefas.

### Rotas da API

- `POST /tasks`: Cria uma nova tarefa.
- `GET /tasks`: Lista todas as tarefas.
- `PUT /tasks/:id`: Atualiza uma tarefa pelo ID.
- `DELETE /tasks/:id`: Deleta uma tarefa pelo ID.

## Certificado

[![Certificado Rocketseat](https://www.rocketseat.com.br/_next/static/media/node.d4c95362.svg)](https://app.rocketseat.com.br/certificates/3c188e2e-46b4-490b-99d3-dcf0476f6880)

Este projeto valida meus conhecimentos em Node.js, Streams, Fundamentos HTTP, Request, Response, Headers, Status Code e Params.