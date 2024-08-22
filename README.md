# ModelApp

# Backend Simulado
Para servir esta aplicação Angular, utilizamos um servidor mock baseado em JSON, fornecido pelo My JSON Server. Este servidor simula uma API REST e é ideal para testes e desenvolvimento, permitindo que a aplicação funcione sem a necessidade de um backend real.

A base de dados mock utilizada neste projeto pode ser encontrada no seguinte repositório:
https://github.com/francilioalencar/mock-produtos

Este repositório contém um arquivo JSON que serve como o banco de dados para a aplicação, fornecendo os dados necessários para exibir e manipular informações utilizada nesta aplicação.

# Rota: Produtos

Utilizamos a base de dados (mock) para realizar os seguintes cálculos:

## Período de Consumo: 
Calcula o período de consumo de um produto como a diferença entre a data final da requisição e a data inicial da requisição.

## Quantidade de Requisições: 
Calcula a soma total de todas as requisições feitas para um determinado produto durante o período de consumo.

##Consumo Médio: 
Calcula o consumo médio de um produto dividindo a quantidade de requisições pelo período de consumo (em dias).


# Clona projeto:


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
