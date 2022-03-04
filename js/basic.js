"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "hello, my name is " + this.name;
    }
}
//crreate a new instance
let firstCustomer = new Customer("narnder");
let message = firstCustomer.announce();
//change the next on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = message;
