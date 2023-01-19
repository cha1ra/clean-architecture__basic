// インターフェースアダプター層
class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUsers(req, res) {
    const users = this.userService.getUsers();
    res.json(users);
  }

  addUser(req, res) {
    const user = new User(req.body.name, req.body.age);
    this.userService.addUser(user);
    res.send('User added successfully!');
  }

  removeUser(req, res) {
    const user = new User(req.body.name, req.body.age);
    this.userService.removeUser(user);
    res.send('User removed successfully!');
  }
}
