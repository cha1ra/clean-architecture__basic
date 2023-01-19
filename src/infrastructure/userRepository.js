// インフラストラクチャ層
class UserRepository {
  constructor() {
    this.users = [];
  }

  findAll() {
    return this.users;
  }

  save(user) {
    this.users.push(user);
  }

  delete(user) {
    this.users = this.users.filter((u) => u !== user);
  }
}
export default UserRepository;
