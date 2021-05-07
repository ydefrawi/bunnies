//class to create a person
// Function to generate x number people
//Function to create random people attributes for each generate person(age, charisma, gender)
//Function to randomly pair them and test compatibility
//If compatable then perhaps they procreate
// Perhaps a gestation period where said person could not procreate during measured in iterations.
// Progeny shouldn't be eligible for procreation for a span of iterations aka maturation.
//sit back watch your creations blink in and out of existence

const rabbitNames = 
[
	"Adorable",
	"Alliebear",
	"Amazing",
	"Angel",
	"Angel Eyes",
	"Angel Face",
	"Angel Heart",
	"Angel of Mine",
	"Apple of My Eye",
	"Babe",
	"Babes",
	"Baboo",
	"Baby",
	"Baby Angel",
	"Baby Bear",
	"Baby Boo",
	"Baby Boy",
	"Baby-Bugga-Boo",
	"Baby Cakes",
	"Baby Doll",
	"Baby Face",
	"Baby Girl",
	"Baby Kins",
	"Baby Love",
	"Bambi",
	"Beany",
	"Bear",
	"Beautiful",
	"Bee’s Knees",
	"Better Half",
	"Big…",
	"Big Boy",
	"Big Daddy",
	"Bitsy",
	"Blossom",
	"Bon-bon",
	"Boo",
	"Boo Bear",
	"Boo Boo",
	"Boogabear",
	"Boy",
	"Browneyes",
	"Bubbies",
	"Bubby",
	"Buddy",
	"Bumpa",
	"Bumpkin",
	"Bunny",
	"Bunbuns",
	"Buster",
	"Butter Babe",
	"Buttercup",
	"Butterfly",
	"Button",
	"Cakes",
	"Candy",
	"Captain",
	"Casanova",
	"Champ",
	"Charming",
	"Cheeky Chimp",
	"Cheeky Monkey",
	"Cheese Ball",
	"Cherry",
	"Cherub",
	"Chick",
	"Chicken",
	"Chipmunk",
	"Chunky Bunny",
	"Chunky Monkey",
	"Cinnamon",
	"Cookie",
	"Cookie Monster",
	"Cowboy",
	"Cowgirl",
	"Cuddlebug",
	"Cuddle Bunny",
	"Cuddle Cakes",
	"Cuddle Muffin",
	"Cuddles",
	"Cuddly",
	"Cuddly-Wuddly",
	"Cupcake",
	"Cuteness",
	"Cutesy Pie",
	"Cutie",
	"Cutie Head",
	"Cutie Patootie",
	"Cutie Pie",
	"Cutie Pootie",
	"Daddy Mack",
	"Daisy",
	"Darlin´",
	"Darling",
	"Darling o’ Mine",
	"Dashing",
	"Dear",
	"Dearest",
	"Dearestone",
	"Dear Heart",
	"Dearie",
	"Dewdrop",
	"Diamond",
	"Dimples",
	"Doll",
	"Doll Baby",
	"Doll Face",
	"Doobie",
	"Doodle Bug",
	"Dork",
	"Dove",
	"Dream Boat",
	"Dream Girl",
	"Duckling",
	"Ducky",
	"Dummy",
	"Dumpling",
	"Egghead",
	"Ever Girl",
	"Ever Guy",
	"Everything",
	"Eyecandy",
	"Flame",
	"Flower",
	"Flower Child",
	"Fluffer-Nutter",
	"Frou-Frou",
	"Fruit Cake",
	"Fruit Loop",
	"Funny Hunny",
	"Gangsta Baby",
	"Georgia Peach",
	"Gorgeous",
	"Giggles",
	"Gigi",
	"Girlfriend",
	"Golden",
	"Goldie",
	"Goobers",
	"Goofy",
	"Gorgeous",
	"Gum Drop",
	"Grrl",
	"Guy",
	"Handsome",
	"Handsome Baby Boo",
	"Haven",
	"Heart Throb",
	"Heisenberg",
	"Hero",
	"Hon’",
	"Honey Bun",
	"Honey Bunch",
	"Honey Bunches of Oats",
	"Honey Bunny",
	"Honey Cakes",
	"Honey Pants",
	"Hot Lips",
	"Hot Mama",
	"Hotness",
	"Hot Pants",
	"Hot Stuff",
	"Hottie",
	"Huggalump",
	"Huggy Bear",
	"Hun",
	"Hun Bun",
	"Hunk",
	"Hunky",
	"Hunny",
	"Hunny Pot",
	"Indian Princess",
	"Indian Warrior",
	"Jelly Bean",
	"Joy",
	"Jujube",
	"Juliet",
	"Kiddo",
	"Killer",
	"King",
	"Kissy Face",
	"Kit Kat",
	"Kitten",
	"Kitty",
	"Kiya",
	"Knight In Shining Armor",
	"Knockout",
	"Ladies Man",
	"Lady Killer",
	"Lady Love",
	"Lala",
	"Lamb",
	"Lambchop",
	"Lambkin",
	"Little…",
	"Little Dove",
	"Looker",
	"Love",
	"Love Boodle",
	"Love Bug",
	"Love Face",
	"Lovely",
	"Love Muffin",
	"Lover",
	"Lover Boy",
	"Lover Girl",
	"Lover Pie",
	"Lovey Dovey",
	"Loveylove",
	"Lovie",
	"Lubber",
	"Lumlums",
	"Luv",
	"Luuuuve",
	"Luv Puppies",
	"Magic Princess",
	"Main Squeeze",
	"Mama",
	"Mamacita",
	"Mami",
	"Marshmallow Man",
	"McDreamy",
	"McSteamy",
	"Mister Cutie",
	"Monkey",
	"Monkey Buns",
	"Mookie-Pookie Bear",
	"Mooky",
	"Muffin",
	"Muffinhead",
	"Muffy",
	"Muggles",
	"Muncie",
	"Munchkin",
	"Muppet",
	"My All",
	"My Beloved",
	"My Beautiful Beloved",
	"My Boo",
	"My Dear",
	"My Everything",
	"My King",
	"My Love",
	"My One and Only",
	"My Queen",
	"My Special Star",
	"My Sweet BoY",
	"My World",
	"Num Nums",
	"Old Lady",
	"Old Man",
	"Other Half",
	"Pancake",
	"Pandabear",
	"Papi",
	"Papito",
	"Paradise",
	"PB&J",
	"Peach",
	"Peaches ‘n’ Creme",
	"Peachy Pie",
	"Peanut",
	"Perfect",
	"Pet",
	"Petal",
	"Pickle Head",
	"Pickle Pie",
	"Pineapple Chunk",
	"Pinky",
	"Pinup",
	"Pinup Girl",
	"Pooh",
	"Pooh Bear",
	"Pooka",
	"Pookie",
	"Pooky Pooky",
	"Poopie",
	"Poopsie",
	"Pop Tart",
	"Pork Chop",
	"Precious",
	"Pretty Girl",
	"Pretty Princess",
	"Prince",
	"Prince Charming",
	"Princess",
	"Puddin’ Head",
	"Pudding",
	"Pudding Pop",
	"Punk",
	"Pumpkin",
	"Puppy",
	"Pussy Cat",
	"Queen",
	"Queenie",
	"Romeo",
	"Roo Roo",
	"Rose",
	"Rosie",
	"Rubber Ducky",
	"Rum-rum",
	"Saeedi",
	"Sailor",
	"Schmooooky Pookie Pooo",
	"Schmoopy",
	"Sexy",
	"Sexy Dork",
	"Sexy Mama",
	"Sexyness",
	"Shmoopie",
	"Shmoops",
	"Shmoopsie Poo",
	"Shoogie Woogie",
	"Short Cake",
	"Shorty",
	"Shy Guy",
	"Silly Goose",
	"Simba",
	"Sleeping Beauty",
	"Slick",
	"Slick Chick",
	"Smiles",
	"Smiley",
	"Smoochie",
	"Snicker Doodle",
	"Snoogypuss",
	"Snookums",
	"Snuggems",
	"Snuggle Bunny",
	"Snuggles",
	"Snuggley Bear",
	"Snuka Bear",
	"Soda Pop",
	"Soldier",
	"Soul Mate",
	"Spark",
	"Sparkles",
	"Sparky",
	"Sport",
	"Spunky",
	"Star",
	"Stinky",
	"Stud",
	"Studley",
	"Stud Monkey",
	"Stud Muffin",
	"Sugah Boogah",
	"Sugams",
	"Suga’pie Honey Bun",
	"Sugar",
	"Sugar Britches",
	"Sugar Lips",
	"Sugar Mama",
	"Sugar Muffin",
	"Sugar Pie",
	"Sugar Plum",
	"Sugar Puff",
	"Sugar Puss",
	"Sugar Smacks",
	"Sun Beam",
	"Sunny",
	"Sunshine",
	"Superman",
	"Superstar",
	"Super Stud",
	"Super Woman",
	"Sweet Cheeks",
	"Sweetheart",
	"Sweetie",
	"Sweetiepie Facecake",
	"Sweetkins",
	"Sweetness",
	"Sweet Potato",
	"Sweets",
	"Sweetsie",
	"Sweetstuff",
	"Sweetthang",
	"Sweetum",
	"Sweety",
	"Tator-Tot",
	"Teady Bear",
	"Teardrop",
	"Tiger",
	"Tiger Toes",
	"Tinkerbell",
	"Toots",
	"Tootsie",
	"Treasure",
	"Tum-Tums",
	"Twinkle",
	"Twinkle Toes",
	"Uncle Upright",
	"Winky Dink",
	"Wonderful",
	"Yummers"
]


const allRabbits=[];
//all but age have range from 1 to 10
Rabbit = class Rabbit {
    constructor(appearance, intelligence, charisma, age, impatience){
        this.appearance = Math.floor(Math.random() * 10) + 1;
        this.intelligence = Math.floor(Math.random() * 10) + 1
        this.charisma = Math.floor(Math.random() * 10) + 1;
        this.age = Math.floor(Math.random() * 100) + 1;
        this.impatience =Math.floor(Math.random() * 10) + 1;
        this.name=""
    }
    
    sayHello(){
        console.log(`My name is ${this.name}!`)
    }
    
}

class Male extends Rabbit {
    constructor(name){
        super();
        this.confidence=Math.floor(Math.random() * 10) + 1;
        this.name=name;
    }
    
    intro(){
            console.log(`Hey ladies!`)
            console.log(`My confidence is ${this.confidence} out of 10!\n`)
        }
    }

    class Female extends Rabbit {
        constructor(name){
        super();
        this.wildness=Math.floor(Math.random() * 10) + 1;
        this.name=name;
    }
    
    intro=function(){
        console.log(`Hey boys!`)
            console.log(`My wildness is ${this.wildness} out of 10!\n`)
        }
    }

const startingGroup = () =>{
    const male1 = new Male('Bobo')
    const male2 = new Male('Fluffy')
    const female1 = new Female('Angie')
    const female2 = new Female('Fluffette')
    allRabbits.push(male1, male2, female1, female2)
    
    soundOff();
    
}


const soundOff = () => {
    allRabbits.forEach(rab=>{
        
        rab.sayHello();
        rab.intro();
    })
}

const makeRabbits = (rabbits) =>{
    for (let i = 0; i < 10; i++) {
        allRabbits.push(new Male(rabbitNames[Math.floor(Math.random() * 350) + 1]));
      }
      soundOff();
}

init=()=>{
    startingGroup()
    makeRabbits()
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

    