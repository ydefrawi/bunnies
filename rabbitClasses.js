var colors = require('colors'); 

//Rabbit Class
Rabbit = class Rabbit {
    constructor(name) {

        
        this.charisma = Math.floor(Math.random() * 10) + 1;
        this.appearance = Math.floor(Math.random() * 10) + 1;
        this.patience = Math.floor(Math.random() * 10) + 1;
    }
}

//Male and Female subclasses
class Male extends Rabbit {
    constructor(name, age=Math.floor(Math.random() * 14) + 15) {
        super();
        this.age = age
        this.name=name
        this.gender = "male";
        this.confidence = Math.floor(Math.random() * 10) + 1;
    }

    sayHello() {
        console.log(`Hi I'm ${this.name}`.brightYellow)
        console.log(`I'm ${this.age} years old and a ${this.gender}!`.brightYellow)
    }

    matingCall() {
        console.log(`Hey ladies!`)
        console.log(`My confidence is ${this.confidence} out of 10!\n`)
    }
}

class Female extends Rabbit {
    constructor(name, age=Math.floor(Math.random() * 14) + 15) {
        super();
        this.age = age;
        this.name = name;
        this.gender = "female";
        this.wildness = Math.floor(Math.random() * 10) + 1;
    }

    sayHello() {
        console.log(`Hi I'm ${this.name}`.brightYellow)
        console.log(`I'm ${this.age} years old and a ${this.gender}!`.brightYellow)
    }

    matingCall () {
        console.log(`Hey boys!`)
        console.log(`My wildness is ${this.wildness} out of 10!\n`)
    }
}


Couple = class Couple {
    constructor(male, female) {
        this.husband = male
        this.wife = female
    }

    kiss(){
        console.log(`${this.husband.name} kisses ${this.wife.name}`.underline.brightRed)
    }
}


module.exports = {
    Rabbit, Male, Female
}

