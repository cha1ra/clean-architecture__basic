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
app.set('userService', userService);
app.set('userRepository', userRepository);

// アプリケーションの起動
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});