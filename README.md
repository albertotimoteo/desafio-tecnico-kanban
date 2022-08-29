# Desafio Técnico Frontend

Autor: Alberto Timóteo <br/>

### Introdução

Esta solução foi desenvolvida utilizando as seguintes tecnologias

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [marked](https://www.npmjs.com/package/marked)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [react-icons](https://react-icons.github.io/)

Antes do início do trabalho no código, desenvolvi um Figma para me guiar no restante da programação Front. [link](https://www.figma.com/file/1iyiILSk1xgH1ZA7a5V9K0/Teste-t%C3%A9cnico-Kanban-Let's-Code?node-id=4%3A2)

### Rodando o projeto

Este projeto foi feito utilizando node.js v16.14.0.

1. Primeiro, faça um clone ou baixe o conteúdo do repositório

2. Abra o seu terminal e rode o script de instalação

```bash
cd desafio-tecnico-kanban/FRONT
yarn
```

or using npm

```bash
cd desafio-tecnico-kanban/FRONT
npm i
```

3. Após isso execute o projeto com o script de execução

```bash
yarn start
```

or using npm

```bash
npm start
```

4. Vá até a pasta do Backend e rode o script de instalação da mesma forma. Após instalado, rode o script de execução.

```bash
cd desafio-tecnico-kanban/BACK
yarn
yarn server
```

or using npm

```bash
cd desafio-tecnico-kanban/BACK
npm i
npm run server
```

**IMPORTANT**: Os passos 3 e 4 deverão estar rodando simultaneamente em terminais distintos.

### Observação:

1. Havia no planejamento a intenção de se escrever testes unitários para todos os componentes e páginas do projeto. Porém, infelizmente, deixei isto como última tarefa e me deparei com um imprevisto. Algum problema na biblioteca react-icons começou a quebrar todos os testes em que os componentes implementavam ícones (quase todos). Tentei pesquisar a solução, mas não consegui resolver a tempo, então decidi entregar com poucos testes feitos e sem a garantia de que vão funcionar corretamente.
