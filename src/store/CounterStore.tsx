import { makeAutoObservable } from "mobx";

class Store {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const store = new Store();
export default store;
