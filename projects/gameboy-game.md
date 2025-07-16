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

When the player moves, it does so in descrete steps, once each frame of animation; the Game Boy produces 60 frames per second. Thus, every frame, the player's velocity is added to its current position to calculate its new position. But if the new position is inside a wall, we need to find a way to move the player out of the wall.

### Am I in a Wall?
But before we can think about moving the player out of a wall, we need a way to tell if the player is inside of one.

It helps that&mdash;*like most Game Boy games*&mdash;the level is made from
square tiles. Knowing that, we can imagine storing a bitmap with one bit per tile. If a bit is 1, the tile is solid, if a bit is 0, the player can move through it. 
