# ORM 
## Scripts
[Scipts Base do banco](https://github.com/tacianosilva/bsi-tasks/tree/master/database/scripts/AtividadesBD/postgres)

[App da tarefa](app.ts)

## ORM no TypeScript
ORM (Object-Relational Mapping) é uma técnica que permite que você interaja com um banco de dados usando a sintaxe de sua linguagem de programação preferida em vez de escrever consultas SQL diretamente. Um ORM mapeia as tabelas do banco de dados para classes ou objetos na sua aplicação, permitindo que você trabalhe com esses objetos para criar, ler, atualizar e deletar registros do banco de dados de uma maneira que seja mais integrada com o idioma do seu código-fonte.

Prisma é um ORM moderno que é projetado para trabalhar de forma eficaz com TypeScript. Ele oferece várias características que o tornam uma escolha atraente para desenvolvedores que trabalham neste ambiente: Modelo de Dados Fortemente Tipado: Prisma gera automaticamente um cliente Prisma (Prisma Client) que é adaptado ao seu esquema de banco de dados. Este cliente é totalmente tipado, aproveitando as capacidades do TypeScript para fornecer segurança de tipo em tempo de desenvolvimento. Isso significa que erros como acessar colunas que não existem são capturados antes mesmo da execução do código. Schema Definition Language (SDL): Prisma utiliza o Prisma Schema Language, que é uma forma declarativa de definir o modelo de dados e as relações entre eles. Este schema é independente do banco de dados subjacente, suportando vários bancos de dados como PostgreSQL, MySQL, SQLite, SQL Server, e mais. Facilidades de Desenvolvimento: Prisma integra-se bem com outras ferramentas de desenvolvimento modernas, oferecendo recursos como autocompletar e introspecção do banco de dados. Ele também suporta migrações avançadas do esquema de banco de dados através do Prisma Migrate.
Ecosistema e Comunidade: Prisma está rapidamente ganhando popularidade e tem um ecossistema em crescimento. Isso inclui documentação extensa, um conjunto ativo de ferramentas de desenvolvimento, e uma comunidade robusta para suporte.

Link da documentação da [ORM Prisma.](https://www.prisma.io/)

## Iniciando Projeto
#### 0 - Entre na pasta ODBC
```console
cd tarefas/orm
```
#### 1 - Baixando dependencia
```console
npm i
```
#### 2 - Rodando o Projeto
```console
npm run dev
``` 