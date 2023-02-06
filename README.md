# Deploy at Firebase

[Twitter App](https://twitter-app-c9815.web.app)

# Setting

1. [Visual Studio Code](https://code.visualstudio.com/)

- Extensions
  - ES7 React/Redux/GraphQL/React-Native snippets
  - Prettier
  - vscode-icons

2. [Node.js (LTS 版)](https://nodejs.org/ja/)
   [注意] version 16.17.0 を使用してください。

- terminal
  - node -v
  - nvm install v16.17.0

3. Google Chrome 拡張機能

- (Redux DevTools)[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd]

# 9 create-react-app オプションと firebase version 指定

<!-- create-react-app オプションと firebase version指定 -->

- terminal command
  - node -v
  - nvm install v16.17.0
  <!-- 次の動画の、4:00辺りのcreate-react-appコマンドですが、--use-npmオプションを付けて実行して下さい。 -->
  - npx create-react-app . --template redux-typescript --use-npm
  <!-- 5:17辺りの npm i firebaseコマンドで下記versionを指定してください。 -->
  - npm i firebase@8.10.0 --legacy-peer-deps
  <!-- 次の動画でnpm installする下記一部のpackageはReact18との互換性でインストールエラーとなる為、--legacy-peer-depsのオプションを指定してinstallしてください。 -->
  - npm i @material-ui/core --legacy-peer-deps
  - npm i @material-ui/icons --legacy-peer-deps

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
