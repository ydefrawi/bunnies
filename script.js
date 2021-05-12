var colors = require('colors');
// PSEUDO CODE
//!--------------------------------------
// class to create a person
// Function to generate x number people
// Function to create random people attributes for each generate person(age, charisma, gender)
// Function to randomly pair them and test compatibility
// If compatable then perhaps they procreate
// Perhaps a gestation period where said person could not procreate during measured in iterations.
// Progeny shouldn't be eligible for procreation for a span of iterations aka maturation.
// sit back watch your creations blink in and out of existence
//! ------------------------------------------


// HOW IT WORKS

//There's a starting group of rabbits numbering from 2 to 5 (randomly generated int). 
//It's made up of males and females 

//The starting group function alternates between creating a male and a female for the length of the randomly generated int.
//Males are stored in maleRabbits array, females in femaleRabbits array

// selectAlphaMale() selects the male from the male array with the highest CONFIDENCE level and removes it from maleRabbits
// selectAlphaFemale() selects the female from the female array with the highest WILDNESS level and removes it from femaleRabbits

//LETS MINGLE 
// calls the select alpha functions to grab the male and female
// They are made a couple (new instance of Couple class is created) and are pushed into the allCouples array
// offspring() function is called which generates between 2 and 5 new rabbits and pushes them into male or female array. 

//offspring calls letsMingle again, completing the circle.  

//TODO: Make female selection less random. 
//TODO: Randomly give the male a desired trait and have him look for  female with highest number for that trait

//TODO: Store children in an array upon birth. 
//TODO: They can stay there while they age until old enough to be added to the dating pool (maleRabbits and femaleRabbits)

//TODO: aging() method in Rabbit class must only be called ONCE on every child rabbit

const asciiRabbit =String.raw`
           ,\
           \\\,_
            \' ,\
       __,.-" =__)
     ."        )
  ,_/   ,    \/\_
  \_|    )_-\ \_-'
    '-----' '--'
`




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

    setTimeout(() => {
        maleRabbits.forEach(rab => {
            rab.sayHello();
        })
        femaleRabbits.forEach(rab => {
            rab.sayHello();
        })
    }, 500);

    setTimeout(() => {
        letsMingle();
    }, 2000);
}

selectAlphaMale = () =>{
    maleRabbits.sort((a,b) => {
        return b.confidence - a.confidence;
    })
    alphaMale = maleRabbits[0];
    //removes the alphaMale rabbit from the maleRabbits array
    maleRabbits.shift();

    // allRabbits = allRabbits.filter(item=> item !==alphaMale.name )

    return alphaMale;
}

selectFemale = () =>{
// TODO: select female based on the male's preferred trait, and sort based on that trait instead of the hardcoded 'wildness' below
    femaleRabbits.sort((a,b) => {
        return b.wildness - a.wildness;
      })
    alphaFemale=femaleRabbits[0];
    //removes the alphaFemale rabbit from the femaleRabbits array
    femaleRabbits.shift();
    
    return alphaFemale
    };



letsMingle = () =>{
    male = selectAlphaMale();
    female = selectFemale()

    const couple = new Couple(male, female)
    allCouples.push(couple)

    //takes 7 seconds to print in its entirety 
    mingleLogs(male, female,couple)


    setTimeout(() => {
        offspring(couple)
    }, 8000);

}   

const mingleLogs=(male, female,couple)=>{

    console.log(`\n${male.name} has decided to take the lead\n`)

    setTimeout(() => {
        console.log(`${male.name} is looking for a wild female.`.bold.brightRed)

    }, 1000);

    setTimeout(() => {
        console.log(`Who's that special someone?`.bold.brightCyan)
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log(`${male.name} has chosen ${female.name}!\n`.brightGreen)

                    }, 500);
                    process.stdout.write(".");
                }, 200);
                process.stdout.write(".");
            }, 200);
            process.stdout.write(".");
        }, 1000);
    }, 2000);

    setTimeout(() => {
        couple.kiss() 
    }, 6000);

    setTimeout(() => {        
        console.log(asciiHeart.bold.brightRed)
        console.log("They are now married!")
        console.log("")
    }, 7000);

}


const offspring = (couple) => {
    randBool = randBoolean();
    const rand2to5 = getRandomInt(2, 4)
    const y = rand2to5;

    console.log(`${couple.husband.name} and ${couple.wife.name} have ${y} babies`.brightMagenta)
    console.log(asciiRabbit.magenta)

    for (let index = 0; index < y; index++) {
        if (randBool) {
            maleRabbits.push(new Male(rabbitNames[getRandomInt(0, 350)], 1));
        } else {
            femaleRabbits.push(new Female(rabbitNames[getRandomInt(0, 350)], 1));
        } randBool = !randBool;
    }
    allRabbits.push(...maleRabbits, ...femaleRabbits);
    
    setTimeout(() => {
        console.log(`\n`)
        console.log(`------------------------------`)
        console.log(`You started with ${x} rabbits!`.brightCyan)
        console.log(`Now you have ${allRabbits.length} rabbits and ${allCouples.length} couples!`.brightCyan)
        console.log(`------------------------------`)
    }, 1000);

    setTimeout(() => {
        maleRabbits.sort((a, b) => {
            return b.age - a.age;
        })
        maleRabbits.forEach(rab => {
            rab.sayHello();
        })
        femaleRabbits.sort((a, b) => {
            return b.age - a.age;
        })
        femaleRabbits.forEach(rab => {
            rab.sayHello();
        })

    }, 3000);


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
    // letsMingle()
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