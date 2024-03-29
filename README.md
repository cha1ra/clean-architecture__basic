


## クリーンアーキテクチャでREST APIを作る場合のディレクトリ構成

クリーンアーキテクチャを用いたREST APIの開発では、主に以下の4つのレイヤーに分けられることが多いです。  
  
1. ドメイン層：このレイヤーでは、アプリケーションのビジネスロジックやドメインモデルが実装されます。
2. アプリケーション層：このレイヤーでは、ドメイン層で定義されたビジネスロジックを呼び出し、ユースケースを実装します。
3. インターフェースアダプター層：このレイヤーでは、アプリケーション層に対して、REST APIのインターフェースを提供します。また、入力や出力のデータをアプリケーション層が扱う形に変換する役割を担います。
4. インフラストラクチャ層：このレイヤーでは、アプリケーションが使用する技術的なサービスを提供します。例えば、データベースアクセス、ログ記録、認証などです。
  
それぞれのレイヤーは、それぞれの責務に応じたフォルダに分類し、それぞれのフォルダに必要なファイルを配置することでファイル構成を整理することができます。  
  
例えば、以下のような構成にすることができます。  
  
- domain: ドメインモデルやビジネスロジックを実装するファイルを配置
- application: ユースケースを実装するファイルを配置
- intrefaceAdapters: REST APIのエンドポイントを実装するファイルを配置
- infrastructure: アプリケーションに必要な技術的なサービスを実装するファイルを配置
  
これは一例であり、実際の開発においては、アプリケーションの規模や複雑さに応じて、適切なファイル構成を選択する必要があります。

## Webアプリケーションを作る場合のディレクトリ構成

Webアプリをクリーンアーキテクチャで実装する場合でも、基本的にはREST API同様に、4つのレイヤーに分類してファイル構成を整理することができます。  
  
1. ドメイン層: このレイヤーでは、アプリケーションのビジネスロジックやドメインモデルが実装されます。
2. アプリケーション層: このレイヤーでは、ドメイン層で定義されたビジネスロジックを呼び出し、ユースケースを実装します。
3. インターフェースアダプター層: このレイヤーでは、アプリケーション層に対して、Webアプリケーションのインターフェースを提供します。 Webアプリケーションに必要な処理を実装し、Viewに必要なデータを渡します。
4. インフラストラクチャ層: このレイヤーでは、アプリケーションに必要な技術的なサービスを実装します。 例えば、データベースアクセス、セッション管理、認証などです。
  
上記の4つのレイヤーに対応するフォルダを作成し、それぞれに必要なファイルを配置することで、Webアプリをクリーンアーキテクチャで実装することができます。  
  
例えば、以下のような構成にすることができます。  
  
- domain: ドメインモデルやビジネスロジックを実装するファイルを配
- application: ユースケースを実装するファイルを配置
- intrefaceAdapters: Webアプリケーションのインターフェースを実装するファイルを配置 (e.g. controller, viewmodel)
- infrastructure: アプリケーションに必要な技術的なサービスを実装するファイルを配置
  
これは一例であり、実際の開発においては、アプリケーションの規模や複雑さに応じて、適切なファイル構成を選択する必要があります。


## ディレクトリ構成

```
.
└── src
    ├── application
    │   └── userService.js
    ├── domain
    │   └── user.js
    ├── infrastructure
    │   └── userRepository.js
    └── intrefaceAdapters
        └── http
            └── userController.js
```

## `index.js` の中身

```javascript
// 依存するモジュールやパッケージの読み込み
import express from 'express';
import userController from './src/interfaceAdapters/http/userController.js';
import userService from './src/application/userService.js';
import userRepository from './src/infrastructure/userRepository.js';

// expressアプリケーションのインスタンスを生成
const app = express();

// ルーティング設定
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUser);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// アプリケーションの設定
/* 
| 補足:
| Express アプリケーションに userService インスタンスと userRepository インスタンスを紐付けることで
| Express アプリケーション内でこれらのインスタンスを使用できるようにしています。
| これにより、userControllerや他の部分でも userService, userRepository を直接インスタンス化せずに
| それらをアプリケーションの設定から取得することができるようになります。
| これにより、アプリケーションの中で使用するインスタンスを共通化でき、管理することができます。
| また、後から変更することもできます。
*/
app.set('userService', userService);
app.set('userRepository', userRepository);

// アプリケーションの起動
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
```