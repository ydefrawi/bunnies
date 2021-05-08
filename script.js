var colors = require('colors');
//class to create a person
// Function to generate x number people
//Function to create random people attributes for each generate person(age, charisma, gender)
//Function to randomly pair them and test compatibility
//If compatable then perhaps they procreate
// Perhaps a gestation period where said person could not procreate during measured in iterations.
// Progeny shouldn't be eligible for procreation for a span of iterations aka maturation.
//sit back watch your creations blink in and out of existence
const asciiHeart=`
,d88b.d88b,
88888888888
'Y8888888Y'
  'Y888Y'   
    'Y'
`

const attributes = {
    wild: "wildness",
    confident:"confidence",
    charismatic:"charisma",
    beautiful: "appearance",
    patient: "patience"
}

const rabbitNames = require('./rabbitNames')
const { Rabbit, Male, Female } = require('./rabbitClasses')
const { Console } = require('console')

const startingRabbits = []
const maleRabbits = []
const femaleRabbits = []
let allRabbits = [];
const allCouples=[];

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

let randBool = randBoolean();
const rand2to5 = getRandomInt(2, 5)
const x = rand2to5;

//These Are the first rabbits randomly spawned
const startingGroup = () => {

    console.log(`You start with ${x} rabbits\n------------------`)
    for (let index = 0; index < x; index++) {
        if (randBool) {
            maleRabbits.push(new Male(rabbitNames[getRandomInt(0, 350)]));
        } else {
            femaleRabbits.push(new Female(rabbitNames[getRandomInt(0, 350)]));
        }  randBool = !randBool;
    } 
    allRabbits.push(...maleRabbits,...femaleRabbits);
    maleRabbits.forEach(rab => {
        rab.sayHello();
    })
    femaleRabbits.forEach(rab => {
        rab.sayHello();
    })
}

selectAlphaMale = () =>{
    maleRabbits.sort((a,b) => {
        return b.confidence - a.confidence;
    })
    alphaMale = maleRabbits[0];
    maleRabbits.shift();
    // allRabbits = allRabbits.filter(item=> item !==alphaMale.name )
    
    console.log(alphaMale)
    return alphaMale;
}

selectFemale = () =>{
    femaleRabbits.sort((a,b) => {
        return b.wildness - a.wildness;
      })
    alphaFemale=femaleRabbits[0];
    femaleRabbits.shift();
    
    // allRabbits = allRabbits.filter(item=> item !==alphaFemale.name )
    return alphaFemale
    };



letsMingle = () =>{
    male = selectAlphaMale();
    female = selectFemale()

    console.log(`\n${male.name} has decided to take the lead\n`)
    console.log(`${male.name} is looking for a wild female.`.bold.brightRed)
    console.log(`Who's that special someone?`.bold.brightRed)
    console.log(asciiHeart.red)
    console.log(`...`)
    console.log(`${male.name} has chosen ${female.name}!`.brightGreen)
    setTimeout(() => {        
        console.log("They are now married!")
    }, 2000);

    const couple = new Couple(male, female)
    allCouples.push(couple)

setTimeout(() => {
    couple.kiss() 
    setTimeout(() => {
        offspring(couple)
    }, 2000);
}, 2000);

}   

const offspring = (couple) => {
    randBool = randBoolean();
    const rand2to5 = getRandomInt(2, 4)
    const y = rand2to5;
    console.log(`${couple.husband.name} and ${couple.wife.name} have ${y} babies`)
    console.log(`\n`)
    for (let index = 0; index < y; index++) {
        if (randBool) {
            maleRabbits.push(new Male(rabbitNames[getRandomInt(0, 350)],1));
        } else {
            femaleRabbits.push(new Female(rabbitNames[getRandomInt(0, 350)],1));
        }  randBool = !randBool;
    } 
    allRabbits.push(...maleRabbits,...femaleRabbits);


    maleRabbits.sort((a,b) => {
        return b.age - a.age;
      })
    maleRabbits.forEach(rab => {
        rab.sayHello();
    })
    femaleRabbits.sort((a,b) => {
        return b.age - a.age;
      })
    femaleRabbits.forEach(rab => {
        rab.sayHello();
    })

console.log(`\n`)
console.log(`------------------------------`)
console.log(`You started with ${x} rabbits!`.brightCyan)
console.log(`Now you have ${allRabbits.length} rabbits and ${allCouples.length} couples!`.brightCyan)
console.log(`------------------------------`)
setTimeout(() => {
    letsMingle();
}, 3000);
}

// const makeRabbits = (rabbits) => {
//     for (let i = 0; i < 10; i++) {
//         allRabbits.push(new Male(rabbitNames[getRandomInt(0,350)]));
//     }
//     console.log(allRabbits)


// }

init = () => {
    startingGroup()
    letsMingle()
    // makeRabbits()
}

init()



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