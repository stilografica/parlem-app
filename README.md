# CRM APP - Parlem


Web application developed with Vue version 3 in Vite and store management made with Pinia.
The user interface has been built with the Vuetify library.  
The development carried out has been designed for an application that will continue to scale:  
- The menu contains some items (disabled) that could be in the future.  
- As we get more users, we would need to make the call with pagination and limit items per page. This would involve adding a pagination in the users table.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
###  Load local fake server
```sh
json-server --watch db.json
```
### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
