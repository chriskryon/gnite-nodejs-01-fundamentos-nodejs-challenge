<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

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

* **Node.js:** Plataforma de execução JavaScript fora do navegador.
* **Módulo HTTP:** Para a criação do servidor e o tratamento das requisições HTTP.
* **csv-parse:** Para o parsing de arquivos CSV.
* **JSON:** Utilizado como banco de dados para armazenar as tarefas.

### Rotas da API

- `POST /tasks`: Cria uma nova tarefa.
- `GET /tasks`: Lista todas as tarefas.
- `PUT /tasks/:id`: Atualiza uma tarefa pelo ID.
- `DELETE /tasks/:id`: Deleta uma tarefa pelo ID.
