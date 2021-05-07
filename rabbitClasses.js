
//Rabbit Class
Rabbit = class Rabbit {
    constructor(appearance, charisma, age, impatience) {
        this.appearance = Math.floor(Math.random() * 10) + 1;
        this.charisma = Math.floor(Math.random() * 10) + 1;
        this.age = Math.floor(Math.random() * 100) + 1;
        this.impatience = Math.floor(Math.random() * 10) + 1;
        this.name = ""
    }
    sayHello() {
        console.log(`Hi I'm ${this.name}!`)
    }
}

//Male and Female subclasses
class Male extends Rabbit {
    constructor(name) {
        super();
        this.confidence = Math.floor(Math.random() * 10) + 1;
        this.name = name;
    }

    matingCall() {
        console.log(`Hey ladies!`)
        console.log(`My confidence is ${this.confidence} out of 10!\n`)
    }
}

class Female extends Rabbit {
    constructor(name) {
        super();
        this.wildness = Math.floor(Math.random() * 10) + 1;
        this.name = name;
    }

    matingCall () {
        console.log(`Hey boys!`)
        console.log(`My wildness is ${this.wildness} out of 10!\n`)
    }
}


module.exports = {
    Rabbit, Male, Female
}