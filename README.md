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

## Funções 

## `Home`

Na página inicial (home), implementamos uma função que é acionada quando o usuário clica em um dos botões HTML. Para evitar a repetição de código, os botões são gerados dinamicamente usando a diretiva *ngFor. As informações de cada botão são armazenadas em uma variável chamada options, que contém o tipo e o título de cada botão.

Variável options: Esta variável contém informações sobre os botões, incluindo seu tipo e título. O tipo é essencial para fornecer parâmetros quando o usuário navega para outras páginas. Os tipos de botões são definidos em um arquivo de enumeração (tipo.ts) na pasta models.

Função showInfo(parametro: string): Esta função é responsável por navegar para outras páginas quando um botão é clicado. Ela recebe um parâmetro do tipo string, que é enviado como um parâmetro de consulta (query parameter) durante a navegação para outra página.

Essas funcionalidades permitem a criação de botões dinâmicos na página inicial, oferecendo aos usuários uma experiência de navegação flexível e personalizada com base nos tipos de botões selecionados.


## InfosComponent
A InfosComponent é um componente Angular que representa uma página de informações gerais, onde os detalhes de vários tipos de entidades do universo Star Wars são exibidos. Esta página permite ao usuário navegar por diferentes tipos de informações, realizar pesquisas, e ver detalhes específicos sobre cada entidade.

## Atributos

`@ViewChild('scrollContainer')` scrollContainer: ElementRef: Uma referência ao elemento de contêiner de rolagem na página.

`private carregandoDados: boolean`: Uma variável privada que controla o estado de carregamento de dados adicionais. com isso ele chama o serviço para carregar mais dados apenas uma vez, sem isso ficava repetindo a chamada varias vezes

`public type: string`: Armazena o tipo de entidade atual, obtido dos parâmetros de consulta da rota.

`public infos: any[]`: Uma matriz que contém as informações a serem exibidas na página.

`public next: string`: Uma string que representa o próximo conjunto de informações a serem carregadas quando o usuário rolar até o final da lista, fazendo a lintagem com scroll infinito.

`public breadCrumb: BreadCrumb[]`: Uma matriz de objetos BreadCrumb que representa a trilha de navegação na página.

`public value: string`: Armazena o valor da caixa de pesquisa, permitindo aos usuários pesquisar informações específicas.

`private searchTerm$ = new Subject<string>()`: Um objeto Subject usado para monitorar e controlar os termos de pesquisa.

`onInput(event: any)`: Método chamado quando o usuário digita na caixa de pesquisa, acionando a pesquisa após um atraso de 500ms depois que ele parar de digitar.

`realizarPesquisa(search: string)`: Método para realizar pesquisas com base no termo de pesquisa fornecido.

`clearInfos()`: Método para limpar as informações digitadas no filtro.

`details(detalhes: Pessoas | Filme | any)`: Método para navegar para a página de detalhes e salvar informações com base no tipo selecionado.

## Métodos

`start()`: Método que inicia a recuperação das informações iniciais com base no tipo selecionado.

`ngAfterViewInit()`: Método do ciclo de vida Angular chamado após a visualização do componente, onde a lógica de rolagem é configurada para carregar mais dados conforme o usuário rola para baixo.

`getMoreInfo()`: Método para carregar mais informações à medida que o usuário rola até o final da lista.

## DetailsComponent
O DetailsComponent é um componente Angular que representa a página de detalhes das entidades do universo Star Wars. Esta página permite ao usuário visualizar informações detalhadas sobre uma entidade específica, como um personagem, planeta, nave, espécie, veículo, entre outros.

## Atributos
`public details: any`: Armazena as informações detalhadas da entidade que será exibida na página.

`public blocos: Bloco[] = []`: Uma matriz de objetos Bloco, onde cada bloco representa uma categoria de informações relacionadas à entidade.

`public type: string = ''`: Armazena o tipo da entidade atual, obtido dos parâmetros de consulta da rota.

`public breadCrumb: BreadCrumb[] = []`: Uma matriz de objetos BreadCrumb que representa a trilha de navegação na página.

## Métodos
`getDetails(url: string)`: Observable<any>: Método para recuperar detalhes de uma URL fornecida, retornando um Observable com os dados.

`start()`: Método que inicia a exibição das informações detalhadas da entidade, incluindo informações relacionadas, como filmes, planetas, naves, etc.

`newDetails(detalhes: Bloco, info: any)`: Método para navegar para a página de detalhes de uma subentidade, salvando as informações com base no tipo selecionado.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
