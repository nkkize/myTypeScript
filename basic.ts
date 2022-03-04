class Customer {
    name: string;
    isActive: boolean

    constructor(name: string, isActive: boolean) {
        this.name = name;
        this.isActive = isActive;
    }

     announce() {
        return "Hello, my name is " + this.name;
    }
}

class SpecialCustomer extends Customer {
    //...
    private announceSpecial() {
        return "Hello, my name is " + this.name;
    }
}

//crreate a new instance
let firstCustomer = new Customer("Narender", true);
let message = firstCustomer.announce();

//change the next on the page
let webHeading = document.querySelector('h1');
webHeading!.textContent = message;

