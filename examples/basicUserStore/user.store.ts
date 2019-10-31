import { Store } from "@leocode/rxstores";
import { User } from "./user.model";

export class UserStore extends Store<User> {
  constructor() {
    // if you have userObejct just put it here
    super();
  }

  init() {
    // fetch some user data
  }

  private async setUserName(name) {
    // do some stuff with user name
  }
}
