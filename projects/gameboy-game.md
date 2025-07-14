---
title: "Game Boy Platform Game"
extUrl: https://github.com/miscellus/gameboy-game

brief: |
    My yet-to-be-titled platform game for the original Nintendo Game Boy,
    written in the Z80-esque assembly language native to the Game Boy CPU. A
    nostalgic project that has compounded my admiration for the creators of the
    games I used to play from the back seat of my parents' Škoda, the faint
    reflective LCD only sporadically illuminated by the street lights gliding
    by outside. I love that the limited instruction set of the Sharp LR35902
    makes every little paragraph of assembly code a small puzzle to solve.

dispElem: >
    <video class="project_video" controls="" width="400"><source src="/files/projects/gameboy-game.mp4#t=0.001" type="video/mp4"></video>

---

[{{extUrl}}]({{extUrl}}).

<!-- -->{{dispElem}}

<p><strong>{{brief}}</strong></p>

## Handling Collisions

In the video above, you see me jumping around a simple platform level. I want to talk a bit about how I prevent the little guy from falling through the ground or walking through walls.



One clue is that&mdash;*like most game boy games*&mdash;the level is made from square tiles. Knowing that, one simple solution would be to 
