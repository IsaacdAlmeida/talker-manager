# Talker Manager

## Introdução

O projeto consiste utilizar os conceitos de CRUD para se operar em informações armazenadas. Nesse projeto foi possível criar endpoints para manipular uma API.

## Sumário

- [Introdução](#introdução)
- [Tecnologias utilizadas](#tecnologias-utilizada)
- [CRUD](#crud)
- [Aprendizados](#Aprendizados)
- [Instruções para utilizar a aplicação](#instruções-para-utilizar-a-aplicação)
- [Histórico de Commits](#histórico-de-commits)

## Tecnologias utilizada

**Back End:** Docker, NodeJs, express.

## CRUD

CRUD é um acrônimo para Create, Read, Update and Delete. Em português Criar, Ler, Atualizar e Deletar registros, nesse projeto não trabalhamos direto com um banco de dados para fazer as operações, utilizamos um arquivo JSON com alguns dados para consolidar melhor os conhecimentos em Node.

## Aprendizados

Fui capaz de desenvolver uma API utilizando os conceitos de CRUD para cadastro e manipulação de dados de Talkers(palestrantes), onde é possível criar, atualizar, pesquisar e deletar informações, também desenvolvi alguns endpoints que leem e escrevem utilizando o módulo FS do Node.js. Como se trata de um pequeno projeto para consolidar os conhecimentos básicos em Node.js e Express, a validação para acesso às requisições é feito utilizando um token gerado pelo módulo Crypto, um token aleatório é gerado e é necessário para validação das requisições. Essa não é a forma mais segura de se fazer uma validação para acesso às informações, mas foi um exercício, como já dito, para aplicar consolidar alguns conceitos de node.js.

Também criei vários middlewares para validar os dados cadastrados, dessa forma ao tentar inserir ou editar algum campo com dados inválidos o usuário recebe uma resposta personalizada para o dado que está errado(Ex. Ao tentar cadastrar um palestrante com o nome vazio, a aplicação retorna o código de erro com a mensagem específica de que o campo nome está vazio, ou se tentar cadastrar um palestrande menor de idade, o retorno será a informação de que o campo idade está incorreto). Assim é possível garantir uma padronização das informações de acordo com as regras de negócio proposta no projeto.

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o repositório, você precisará instalar as dependências do projeto com o comando `npm install` e usar o comando `docker-compose up -d` para criar e iniciar o container. O comando deverá ser feito via terminal no diretório em que está o arquivo **docker-compose.yml**.
Após o container subir você poderá fazer as requisições utilizando um cliente HTTP (insomnia, postman, httpie e etc)

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
***
  <a href="https://www.linkedin.com/in/isaacalmeidafilho/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
