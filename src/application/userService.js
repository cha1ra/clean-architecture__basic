// アプリケーション層のクラス
class UserService {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users = this.users.filter((u) => u !== user);
  }

  getUsers() {
    return this.users;
  }
}
export default UserService;
