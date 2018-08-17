import {action} from "mobx";

export class Actions {
    constructor({store}) {
        this.store = store;
    }

    @action
    incA = () => {
        this.store.a ++;
    };

    @action
    desA = () => {
        this.store.a --;
    };

    @action
    reset = () => {
        this.store.a = 0;
    };
}