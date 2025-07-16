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

When the player moves, it does so in descrete steps, once every frame of animation. Thus, every frame, the player's velocity is added to its current position to calculate its new position. But if the new position is inside a wall, we need to find a way to move the player out of the wall. But first, we need a way to tell if the player is inside of a wall.

### How the Game Boy draws stuff
You might have noticed that Game Boy games draw everything as a bunch of 8x8 pixel tiles. The level of my platform game is no different, each wall tile is 8x8 pixels. So, one way to test if a position was in a wall would be to look up directly in the

One way of doing it would be to use the graph TODO
Because the level is made from square 8x8 pixel tiles (like most Game Boy games), we can essentially divide the X and Y and coordinates of the player's position by 8. Then we can use the divided X and divided Y to lookup into a bitmap where each bit corresponds to a tile in the level and represent. bit is 1, the tile is solid, if a bit is 0, the player can move through it. 

Knowing that, we can imagine storing a bitmap with one bit per tile. If 
