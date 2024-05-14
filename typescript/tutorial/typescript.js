"use strict";
// type SuperPrint = <T>(a: T[]) => T;
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringStorage = new LocalStorage();
stringStorage.set("name", "nico");
const aaa = stringStorage.get("name");
console.log(aaa);
const numberStorage = new LocalStorage();
numberStorage.set("age", 30);
const bbb = numberStorage.get("age");
console.log(bbb);
const booleanStorage = new LocalStorage();
var cc = booleanStorage.get("xxx");
console.log(cc);
booleanStorage.set("isCat", true);
const ccc = booleanStorage.get("isCat");
console.log(ccc);
