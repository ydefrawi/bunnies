//TODO export this and import it into script.js if i end up adding more helper functions

//helper function - gets random integer between min and max
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//generates a random boolean
const randomBoolean = Math.random() < 0.5;
