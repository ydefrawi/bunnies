# bunnies

## How it works

This follows one branch of a family tree of rabbits

There's a starting group of rabbits numbering from 2 to 5 (randomly generated int). 

It's made up of males and females 

The starting group function alternates between creating a male and a female for the length of the randomly generated int.

Males are stored in maleRabbits array, females in femaleRabbits array

**selectAlphaMale()** selects the male from the male array with the highest CONFIDENCE level and removes it from maleRabbits

**selectAlphaFemale()** selects the female from the female array with the highest WILDNESS level and removes it from femaleRabbits

**LetsMingle()**
Function calls the select alpha functions to grab the male and female
They are made a couple (new instance of Couple class is created) and are pushed into the allCouples array
offspring() function is called which generates between 2 and 5 new rabbits and pushes them into male or female array. 

offspring calls letsMingle again, completing the circle.  

### TODO
Make female selection less random. 

Randomly give the male a desired trait and have him look for  female with highest number for that trait

Store children in an array upon birth. 
They can stay there while they age until old enough to be added to the dating pool (maleRabbits and femaleRabbits)

aging() method in Rabbit class must only be called ONCE on every child rabbit
