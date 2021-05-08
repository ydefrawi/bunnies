//class to create a person
// Function to generate x number people
//Function to create random people attributes for each generate person(age, charisma, gender)
//Function to randomly pair them and test compatibility
//If compatable then perhaps they procreate
// Perhaps a gestation period where said person could not procreate during measured in iterations.
// Progeny shouldn't be eligible for procreation for a span of iterations aka maturation.
//sit back watch your creations blink in and out of existence

const rabbitNames = require('./rabbitNames')
const { Rabbit, Male, Female } = require('./rabbitClasses')

const startingRabbits = []
const maleRabbits = []
const femaleRabbits = []
const allRabbits = [];

//generates a random boolean
randBoolean = () =>{
    let randomBoolean = Math.random() < 0.5;
    return randomBoolean
}

//helper function - gets random integer between min and max
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//These Are the first rabbits randomly spawned
const startingGroup = () => {
    randBool = randBoolean();
    const rand2to5 = getRandomInt(2, 5)
    const x = rand2to5;
    console.log(`You start with ${x} rabbits\n------------------`)
    for (let index = 0; index < x; index++) {
        if (randBool) {
            maleRabbits.push(new Male(rabbitNames[getRandomInt(0, 350)]));
        } else {
            femaleRabbits.push(new Female(rabbitNames[getRandomInt(0, 350)]));
        }  randBool = !randBool;
    } 
    maleRabbits.forEach(rab => {
        rab.sayHello();
    })
    femaleRabbits.forEach(rab => {
        rab.sayHello();
    })
}

selectMale = () =>{
    randomMale=maleRabbits[getRandomInt(0, maleRabbits.length)]
    console.log(randomMale)
    return randomMale;
}

selectFemale = () =>{
    let wildnessArray = femaleRabbits.map(a=>a.wildness);
    console.log(wildnessArray)
}

letsMingle = () =>{
    randomMale = selectMale();
    

}


// const makeRabbits = (rabbits) => {
//     for (let i = 0; i < 10; i++) {
//         allRabbits.push(new Male(rabbitNames[getRandomInt(0,350)]));
//     }
//     console.log(allRabbits)


// }

init = () => {
    startingGroup()
    selectMale()
    console.log(femaleRabbits)
    selectFemale()
    // makeRabbits()
}

init()



letsMingle = () => {
}

// Pen = class Pen {
//     constructor(allRabbits){
//        this.allRabbits=allRabbits;
//     }

//     showRabbits(){
//         [a, b, ...rest]=this.allRabbits
//         console.log(c)
//     }
// }
// coop = new Pen()