---
title: "Game Boy Platform Game"
extUrl: https://github.com/miscellus/gameboy-game

brief: |
    My unfinished platform game for the original Nintendo Game Boy written in
    assembly language. A nostalgic project that has really made me
    admire the creators of the games I used to play as a child. I love that the
    limited instruction set of the Game Boy makes every little paragraph of
    code a small puzzle to solve.

dispElem: >
    <video class="project_video" controls="" width="400"><source src="/files/projects/gameboy-game.mp4#t=0.001" type="video/mp4"></video>

---

## Making the Walls Solid

In the video above, you see me jumping around a simple platform level. I want
to talk a bit about how I prevent the little guy from falling through the
ground or walking through walls.

{#
The player's movement is simulated in descrete time steps matching the Game Boy's display refresh frequency of 60hz. Thus, every 1/60th of a second, the player's velocity is added to its current position to calculate the desired new position. The crux is that if this new position is inside a wall, we can't just move the player to the new position, we need to calculate a position that does not penetrate the wall.
#}

Like most video games, movement of the player (any movement), is simulated in descrete time steps. In this game, 1/60th of a second, matching the frequency of the Game Boy's display update frequency.

The player's movement is simulated in descrete time steps matching the Game Boy's display refresh frequency of 60hz. Thus, every 1/60th of a second, the player's velocity is added to its current position to calculate the desired new position. The crux is that if this new position is inside a wall, we can't just move the player to the new position, we need to calculate a position that does not penetrate the wall.

But before we can think about moving the player out of a wall, we need a way to tell if the player is inside of one.

### Am I in a Wall?
But before we can even do that, we need a way to determine if the player's position&mdash;*or indeed any position*&mdash;is inside of a wall.

{#
As the game is updated in descrete timesteps of 1/60th of a second,
#}

Here is the overall algorithm:

1. First step is to detect if a collision has happend in the current simulation step.
1. If a collision has happend, prevent 


One clue is that&mdash;*like most Game Boy games*&mdash;the level is made from
square tiles. Knowing that, one simple solution would be to test the new player position for collision before  

