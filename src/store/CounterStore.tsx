import { observable, action } from "mobx";
import React from "react";

class CounterStore {
  @observable count: number = 0;

  @action.bound increment() {
    console.log("increment");
    this.count++;
  }

  @action.bound decrement() {
    this.count--;
  }

  @action.bound reset() {
    this.count = 0;
  }
}
const counterStore = new CounterStore();
export default counterStore;
