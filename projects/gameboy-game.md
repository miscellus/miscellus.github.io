---
title: "Game Boy Platform Game"
extUrl: https://github.com/miscellus/gameboy-game

brief: |
    My unfinished platform game for the original Nintendo Game Boy written in
    game boy assembly language. A nostalgic project that has really made me
    admire the creators of the games I used to play as a child. I love that the
    limited instruction set of the Game Boy CPU makes every little paragraph of
    code a small puzzle to solve.

dispElem: >
    <video class="project_video" controls="" width="400"><source src="/files/projects/gameboy-game.mp4#t=0.001" type="video/mp4"></video>

---

## Handling Collisions

In the video above, you see me jumping around a simple platform level. I want to talk a bit about how I prevent the little guy from falling through the ground or walking through walls.

One clue is that&mdash;*like most game boy games*&mdash;the level is made from square tiles. Knowing that, one simple solution would be to 
