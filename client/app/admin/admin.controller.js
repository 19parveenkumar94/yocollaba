'use strict';

export default class AdminController {
  users: Object[];
  pendingRequestOrg: Object[];
  Auth;
  /*@ngInject*/
  constructor(User,Auth) {
    // Use the User $resource to fetch all users
    this.Auth=Auth;
    this.users = User.query();
    console.log(this.users);

  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
  accept(user){

    this.Auth.accept(user._id);
  }
}
