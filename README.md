# ModelApp

## Tecnologias Utilizadas

- **Angular**: Framework principal para desenvolvimento da aplicação.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento em Angular.
- **HTML5 & CSS3**: Para a estruturação e estilização do conteúdo.
- **My JSON Server**: Ferramenta utilizada para criar uma API fake para o consumo de dados.

## Requisitos

- Node.js e npm instalados na máquina.
- Angular CLI instalado globalmente.

## Backend Simulado

Para servir esta aplicação Angular, utilizamos um servidor mock baseado em JSON, fornecido pelo My JSON Server. Este servidor simula uma API REST e é ideal para testes e desenvolvimento, permitindo que a aplicação funcione sem a necessidade de um backend real.

A base de dados mock utilizada neste projeto pode ser encontrada no seguinte repositório:  
[Mock Produtos](https://github.com/francilioalencar/mock-produtos)

Este repositório contém um arquivo JSON que serve como o banco de dados para a aplicação, fornecendo os dados necessários para exibir e manipular informações utilizadas nesta aplicação.

## Rota: Produtos

Utilizamos a base de dados (mock) para realizar os seguintes cálculos:

### Período de Consumo

Calcula o período de consumo de um produto como a diferença entre a data final da requisição e a data inicial da requisição.

### Quantidade de Requisições

Calcula a soma total de todas as requisições feitas para um determinado produto durante o período de consumo.

### Consumo Médio

Calcula o consumo médio de um produto dividindo a quantidade de requisições pelo período de consumo (em dias).

## Como Clonar o Projeto

1. Faça um fork do repositório.
2. Abra o terminal no diretório onde deseja clonar o projeto.
3. Execute o comando abaixo para clonar o repositório:

   ```bash
   git clone https://github.com/francilioalencar/model-app.git
   
4. Entre no diretório do projeto clonado:

      ```bash
   cd modelapp
   
5. Execute o comando _npm install_ para instalar os pacotes necessários e criar as dependências entre os pacotes:

   ```bash
   npm install
   

# Comandos Necessários
   ```bash
   npm install
   
Execute este comando uma única vez no diretório do projeto pelo terminal, logo após realizar o clone.

  ng serve --pen
   
Sempre que desejar rodar o projeto, execute este comando pelo terminal no diretório do projeto.

# Informações Adicionais
Este projeto foi gerado com Angular CLI versão 17.3.8.

Servidor de Desenvolvimento
Execute ng serve para iniciar um servidor de desenvolvimento. Navegue até http://localhost:4200/. A aplicação recarregará automaticamente se você modificar qualquer um dos arquivos de origem.

# Geração de Código
Execute ng generate component component-name para gerar um novo componente. Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build
Execute ng build para compilar o projeto. Os artefatos de build serão armazenados no diretório dist/.

# Testes Unitários
Execute ng test para executar os testes unitários via Karma.

# Testes End-to-End
Execute ng e2e para executar os testes end-to-end através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste end-to-end.
