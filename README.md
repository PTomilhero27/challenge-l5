# FrontendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

Run `ng serve` ou com npm run start ou yarn start para iniciar o servidor de desenvolvimento. inicia para a url `http://localhost:4200/`. A aplicação vai dar reload quando voce alterar e salvar um arquivo
ou se preferir testar sem precisar baixar o projeto, está feito o deploy na vercel `https://challenge-l5.vercel.app/`

## Documentação da Aplicação
 ## Estrutura do Projeto
A nossa aplicação é composta por três pastas principais:
`Home`: Esta pasta contém os componentes e recursos relacionados à página inicial da aplicação.
`Info`: Aqui, encontramos os componentes e recursos relacionados à página de informações.
`Detalhes`: Esta pasta abriga os componentes e recursos relacionados à página de detalhes.

## Componentes Globais
Existem alguns componentes globais que são compartilhados entre as diferentes partes da aplicação:

`Header`: Este componente está presente em todas as páginas e inclui o breadcrumb, que é exibido nas páginas Info e Detalhes.
`Loading`: Desenvolvemos um interceptor para este componente, que captura todas as chamadas de API. Ele exibe um spinner do Material Angular no canto inferior esquerdo da tela, indicando que uma `requisição` está em andamento. Estamos considerando a possibilidade de criar outro interceptor para exibir alertas de erro em caso de falha nas requisições.

## Serviços
A nossa aplicação possui três serviços principais:

`state.service.ts`: Este serviço gerencia o estado da aplicação, que se refere aos dados e informações compartilhados e utilizados por vários componentes em toda a aplicação Angular. A utilização de um serviço para gerenciar o estado é uma prática comum, pois ajuda a manter a separação de preocupações e a facilitar a comunicação entre os componentes. Os estados incluem a verificação de carregamento e a disponibilização de informações na tela na página de Detalhes, eliminando a necessidade de passar dados por meio de @Input.

 `sw.service.ts`: Este serviço é responsável por realizar requisições à API. Ele possui duas funções principais:
`getGeralInfo`: Esta função pode ser usada para obter informações gerais ou informações filtradas. Isso permite que façamos requisições para todos os tipos de informações ou para tipos específicos com filtro.
`getNextInfo`: Essa função é usada para obter mais informações de outra página ao fazer scroll e capturar informações adicionais para a página de Detalhes.
Modelos Para representar os dados da nossa aplicação, criamos modelos específicos. Cada modelo corresponde a um tipo de informação relacionada a filmes. Algumas modificações foram feitas nos modelos para atender às necessidades específicas do projeto.

## Teste unitarios 

Fiz os teste nas 3 paginas principais para testar oss funcioanemntos basicos, para rodar os teste é simples, apeas digite no terminal `ng test`, ou se preferir usar o npm ou yarn é assim `npm run test`, `yarn test` os teste são feito via karma, e abrido um arquivo no google para a visualização dos teste

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
