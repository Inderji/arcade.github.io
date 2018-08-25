frontend-nanodegree-arcade-game by Inderjeet Sahu, B.Voc(Software Developer)
===============================
This is an Arcade game in which a player should have collect the Objects (Like: Heart, Star, Diamonds, etc) which will be appear in sceen. But one second!
this is not so easy, know Why?
In the path between a player and the object, few cocroches comes to prevent you to collect the Objects and makes the game tough. 
So ready to play?
Link on the link below and redirect to the game:
https://inderji.github.io/arcade.github.io/
Get, Set, Go!

frontend-nanodegree-arcade-game
===============================

## Table of Contents

* [Instructions](#instructions)
* [Player](#Player)
* [Enemy] (#Enemy)
* [Score] (#Score)
* [winning condition] (*winning condition)

## Instructions
This Project has HTML,CSS and js file to display dynamic version of Memory Game.
The Images folder contains images used to draw images of player, enemy, gems,stars etc. Sound folder contain the audio file used for giving sound effect to the game.
resources.js file is used for loading images and with the help of engine.js file we are rendering entities and updating their values.

To get started playing Memory game just open index.html file in any browser and press UP/Down/Left/Right arraow keys to move player. 

##Player
currently only single player can play the game at a time. If collision happen between enemy and player then player will automatically places to starting place of Player.

##Enemy
Multiple enemies are available.

##Score
with the help of catching gems,heart,star player can increase score by 5 and if collision happen between player and enemy then score will decrease by 5. Initial score is 0.

##Winning condition
when player reached to water after succesfully avoiding all enemies player won the game. After won the game popup displayed. It contain information about score and time taken to complete game. 

.
