GAME: SPACE INVADERS
INTRODUCTION
The game is about shooting alien's spaceships while controlling your own. The player's spaceship will be placed on the bottom and they can move it just horizontally. Every second the alien's spaceships will move horizontally on every line. When the alien's spaceship get to the border they will go on the line below. Each level will have a different number of aliens and placement. The game ends when the player beats all the levels or when the spaceship gets touched by the aliens.

USER STORY
The player wants to:
1. See the title
2. See a brief introduction
3. See some instructions
4. See where they're playing
4. See a start button
5. Move his spaceship
6. Shoot the aliens
7. See the bullet travel
8. See the aliens moving
9. See the aliens disapper when cought
10. Next level button
11. Score
12. In case of losing see a game over

PSEUDOCODE

Immage it like a big grid ⁮-(8*16)(would be nicer for the movement to make it a lot bigger, making the movement more fluent)-(search or ask how to make that grid manageble in the html)-. The bottom line of this grid will be the player's spaceship moving line -(switching indexes and setting a max and min index of traveling or if it's a nested array just selecting the last array and doing a +number for the right and -number for left (maybe something related to the .lenght method (?))-. Depending on the square that they shoots, the bullet should go vertically -(so i should add a minus something for that thing to travel across the grid or assign a class to each array of the nest(?))-. The journey of the bullet should be visible. Every 0,5 second -(timer)- the bullet will change the square of the grid until it reaches a spaceship and when they miss it will disappear reaching the first line (?). -(Nested array (?))-. The alien spaceships will move every second-(another timer)- and change position -(maybe appling a value to the ship that will be assigned to an index of the array and then decrasing by 1 that value (?))-. When the bullet meets a ship, the ship will disappear -(using maybe the  .some() method or when it will be just one element in the nested array that is the player's spaceship [but when they shoot it counts as an element (?)] (?))-. When the player destroys every alien -(the destruction of a spaceship should return some point)-, the player should get a next level option with a button or maybe an event listener -(ask about the local storage for the points)-. The circle repeats for a certain number of levels.

Inputs (user submitted or computer generated)

USER SUBMITTED
Start button
Next level button (or event listener)
Moving and shooting inputs (using the arrow keys for moving and spacebar for shooting)

COMPUTER GENERATED
Timer that makes spaceships move

// * Variables & State (think scores, choices, timers, lives etc)

// scoreboard
// points = 500;
// right
// left
// grid
// shoot
// alien's movement
// win = false
// lose = false

// * User Interactions (user initiated events like clicks, hovers, key presses etc)
event listeners to go to the left, to the right, one for the shooting, one on the button to start, one to the next lvl

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)
win condition = no element is remaining in the array (except the player's spaceship).
lose condition = if the aliens collide with the player's ship (so i would immagine that meeting the player would output a truthy value (?))

// * Conditions / Branching (which conditions will lead to which things happening)


// * Loops (if any) (does any logic repeat? For example a ticking timer or in a game of poker maybe multiple computer choices generated on a loop)
// We should have 2 timers, one for the bullet and one for the alien's movement
// The script should be the same for each level

// * Outputs / Feedback (What will the app output to the screen)
// Final score 
//(maybe adding a popup on every ship destroyed)
//Game starting
//Next lvl option

1. grid
2. movement
3. spaceships
4. collision
5. next lvl