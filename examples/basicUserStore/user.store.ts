import { Store } from "@leocode/rxstores";
import { User } from "./user.model";

export class UserStore extends Store<Partial<User>> {
  constructor() {
    const initialValue: Partial<User> = {};
    super(initialValue);
  }

  async init() {
    const responseData = await fetch("https://swapi.co/api/people/1/").then(
      res => res.json()
    );

    this.value = responseData;
  }

  get isDataLoading() {
    return Object.entries(this.value).length === 0;
  }
}
