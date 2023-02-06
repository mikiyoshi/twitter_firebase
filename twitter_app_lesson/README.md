<!--
copy note
find . -type f -name "*copy*" -exec rename  's/ copy/013/g' "{}" +;
mv ./src/*[0-9][0-9][0-9]* ./src_note/;
mv ./src/app/*[0-9][0-9][0-9]* ./src_note/app/;
mv ./src/features/*[0-9][0-9][0-9]* ./src_note/features/;
-->

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

# start

- npm start

# 10 [補足] 次のレクチャー 10 動画 注意点

1. 次のレクチャー動画 6:27 辺りで記述する(firebase.ts)下記 import 文ですが、環境によってはエラーになってしまうようですので、エラーが出てしまった場合は、下記の置き換えをしてください。

import \* as firebase from "firebase/app";
↓ 　置き換え
import firebase from "firebase/app";

2. 次のレクチャー動画 1:49 辺りの config 設定ですが、最新の Firebase のコンソールでは、databaseURL が自動生成され無いので、

代わりに下記の databseURL を使用して下さい。PROJECT_ID を各自のプロジェクト ID で書き変えをお願いいたします。

```
databseURL: "https://PROJECT_ID.firebaseio.com",
projectId: "PROJECT_ID",
```

# 12 [注意] Firebase storage security rules

次のレクチャーで Firebase のプロジェクトを作成した後に、Storage の Rules が

↓ こちらの様に条件式が if false で初期化されてしまうケースがありますので

```
rules_version = '2';
service firebase.storage {
 match /b/{bucket}/o {
   match /{allPaths=**} {
     allow read, write: if false;            <- if falseになってしまっている。
   }
 }
}
```

その場合は、条件式を下記の様に書き換えてください。

```
rules_version = '2';
service firebase.storage {
 match /b/{bucket}/o {
   match /{allPaths=**} {
     allow read, write: if request.auth != null;   <- こちらの一行を書き換え
   }
 }
}
```

# 13 Redux DevTools

- Google Chrome 右クリック Redux DevTools
- Reload Chrome
- State / Tree

# 15 [注意] Sign in 画面のテンプレート

次のレクチャー、0:50 辺りで material ui の公式サイト(現在は mui)から Sign in 画面のテンプレートを取ってくるのですが、代わりに ↓ こちらの GitHub レポジトリーを使用するようにしてください。

https://github.com/GomaGoma676/signin-side-material-ui/blob/main/signinside.js

\*動画の手順ですと最新のテンプレートの repository を参照してしまい、version 互換性の問題が発生してしまうためです。

# 18 [訂正] try catch block

次のレクチャー動画 12:13 辺りで追加する onClick の処理ですが、catch の引数に any 型を追加するようにしてください。

# 21 Bug

- Storage Rules
  Update `false` to `request.auth != null`

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

- env

Update `REACT_APP_FIREBASE_STRAGE_BUCKET` to `REACT_APP_FIREBASE_STORAGE_BUCKET`

# 23 Firestore Database > Cloud Firestore

- click at `switch to native mode`

# 25 Bug

Update Cloud Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if  false;
    }
  }
}
```

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

# 29

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  function isAuthenticated() {
  return request.auth != null;
  }
    match /posts/{postsID=**} {
      allow read, create: if isAuthenticated();
    }
  }
}
```

# 30 Hosting

- terminal

  - node -v
  - nvm install v16.17.0

- npm install -g firebase-tools

- npm run build

- firebase init
  - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys // space > Enter
  - Use an existing project // Enter
  - twitter-app-c9815 (twitter-app) // Enter
  - ? What do you want to use as your public directory? build
  - ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
  - ? Set up automatic builds and deploys with GitHub? No
  - ? File build/index.html already exists. Overwrite? No
- firebase deploy

# 30 Bug

- .env // STRAGE > STORAGE

```
REACT_APP_FIREBASE_STRAGE_BUCKET="XXXX"
```

```
REACT_APP_FIREBASE_STORAGE_BUCKET="XXXX"
```

- firebase.ts // STRAGE > STORAGE

```
storageBucket: process.env.REACT_APP_FIREBASE_STRAGE_BUCKET
```

```
storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
```

# Firebase プロジェクト削除したいときは

- project overview > project setting > delete project

<!--









 -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
