# TaskList - Microserviços com Spring Boot e Front-end em React

TaskList é uma aplicação de gerenciamento de tarefas diárias, desenvolvida com arquitetura de microserviços utilizando Spring Boot no back-end e React no front-end. A aplicação permite que os usuários se cadastrem, criem, editem e removam suas tarefas, proporcionando uma gestão diária simplificada.

## Arquitetura do Projeto

A aplicação é dividida em dois principais componentes:

- **Back-end (Spring Boot):** API desenvolvida com Spring Boot, seguindo uma arquitetura de microserviços. Cada serviço é responsável por uma parte distinta da aplicação, como autenticação, gerenciamento de tarefas e comunicação com o banco de dados.
- **Front-end (React):** Interface web desenvolvida com React, consumindo os serviços do back-end para exibir e manipular as tarefas dos usuários.

### Tecnologias Utilizadas

#### Back-end

- **Spring Boot**: Framework para desenvolvimento de APIs RESTful
- **Spring Cloud**: Para facilitar a comunicação e orquestração dos microserviços
- **Spring Security com JWT**: Autenticação e autorização baseada em tokens JWT
- **MongoDB**: Banco de dados NoSQL para armazenamento de tarefas
- **RabbitMQ**: Sistema de mensageria para comunicação entre microserviços
- **Docker**: Contêinerização dos serviços

#### Front-end

- **React**: Biblioteca para construção da interface de usuário
- **Axios**: Para consumo de APIs REST no front-end
- **Tailwind CSS**: Framework utilitário para estilização responsiva

## Estrutura de Microserviços

O back-end está dividido nos seguintes microserviços:

1. **Serviço de Autenticação:** Responsável por cadastro, login e geração de tokens JWT.
2. **Serviço de Tarefas:** Gerencia as operações de CRUD de tarefas.
3. **Serviço de Notificações:** Responsável por enviar notificações sobre o status das tarefas, utilizando RabbitMQ.

Cada microserviço possui seu próprio banco de dados e comunicação assíncrona através de filas no RabbitMQ.

## Instalação

### Requisitos

- Java 17+
- Node.js 14.x+
- MongoDB (local ou em nuvem)
- RabbitMQ (local ou em nuvem)
- Docker (opcional, para executar os serviços em contêineres)

### Back-end

1. Clone o repositório do back-end:

```bash
git clone https://github.com/seu-usuario/tasklist-backend.git
cd tasklist-backend
