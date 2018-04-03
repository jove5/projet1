# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

"Stuck To The Top" is a one player game in which the player has to build blocks one by one to the top. 
The blocks will be moving horizontally. In the middle of the screen, it will be a field with a different color. 
The player will be challenged to stop the moving block in that field by pressing a "space" key on the keyboard. 
For each successful stuck the player will get points; if the player stops the block out of the field game over; 
if part of the block is inside the field the player will get fewer points.

## Wireframes

* https://drive.google.com/file/d/1OpF5W7WMT6L46J7d-sGgF66m9guSJuge/view?usp=sharing 
* https://drive.google.com/file/d/1kyHpODGOvC13fFRnPNqyzBoYAu_ZPZG5/view?usp=sharing
* https://drive.google.com/file/d/1q1J771WyqGZUoX_Z0Zw0jhvDy9wQkrCw/view?usp=sharing

## Priority Matrix
* https://drive.google.com/file/d/1CvzN_B4rkE5zhUgFRYz4tppmRijaIESu/view?usp=sharing
* build the landing page (1h)
* css animation, transitoin form ladning page to game play page (1h)
* build the game page (4h)
* build the win/lose page (2h)
* create function that will move the block horizontally and bounce of the walls(3h)
* come up with logic how to increase speed and decrease size of the block after every press of the 'space' key (6h)
* create a function that will keep track of the score
* create a function that will save player's name (2h)

## Game Components

### Landing Page
the back ground of the screen will be a picture of a winning game,
on top of the screen the name of the game will be displayed,
in the middle it will be a input where the player can put his name;
and on the bottom of the page will be a start button 

### Game Initialization
on the left top corner it will be the player name, on the top right corner will be his current score 
in the middle of the screen, it will be shadowed field representing where the block should be placed,
first block will be moving 
### Playing The Game
the player has to place the moving block inside the fild to gain more points

### Winning The Game
if the player reach the top of the screen he win 

### Game Reset
after winninig or losing new page will load and stick to the screen for 5-10 sec after that the landing game page will load 

## MVP 

* record players name 
* landing page, game page, win/lose page
* record score 
* each block will change color 
* create a function that will recorde last 5 high scores
## POST MVP


* add more levels 
* adding a function that will break the part of the block that is not landed on the previous block
* add timer 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Landing Page | L | 1hrs| 1hr | 1hr |
| Css Animation | L | 1hrs| 30min | 30min |
| Game Page | H | 4hrs| 2hrs | 2hrs |
| Win/Lose Page | H | 2hrs| 2hrs | 2hrs |
| Moving Block | H | 3hrs| 6hrs | 6hrs|
| Logic | H | 6hrs| 10hrs | 10hrs |
| Score tracker | L | 2hrs| 1hr | 1hr |
| Record Plaer Name | L | 2hrs| 1hr| 1hr |
| Total |  | 21hrs| 23.5hrs  | 23.5hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| landingPage | creating landing page with form and start button | 
| |  |

## Additional Libraries
 I used jquery. 

## Code Snippet
  const gamePage = $('<div>');
    gamePage.attr('class', 'Page');
    gamePage.attr('id', 'gamePage');
    // appending game page to board
    $('#board').append(gamePage);
    block(blockProperties.id, blockProperties.vertical);
    $(document).on('keydown', (e) => {
      if (e.keyCode === 32) {
        $('.blockMove').removeClass('blockMove');
        $(`#blockPice${blockProperties.id}`).css('right', value);
        if ($('#blockPice16').css('bottom') === `${481}px`) {
          setTimeout(() => {
            $('#gamePage').css('display', 'none');
            winLosePage();
          }, 2000);
        }

## jQuery Discoveries
* setInterval()
* (document).off()

## Issues and Resolutions
* keep track on the position of the moving piece
* stop the setInterval at certain point cause the browser was crashing                          
**RESOLUTION**: 
* I used method setInterval to check the position every 02 of a second 
* i used stopInterval when the last piece is set 
* const check = setInterval(() => {
      const positio = $('.blockMove').css('right');
      value = parseInt(positio);
      // ------------- stop the interval----------------------------------------
      if ($('#blockPice17').css('bottom') === `${481}px`) {
        clearInterval(check);
      }
    }, 2);
