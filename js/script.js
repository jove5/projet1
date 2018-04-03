// starting jQuery
$('document').ready(() => {
  // class PlayerName {
  //   constructor(name, score) {
  //     this.playerName = name;
  //     this.playerScore = score;
  //   }
  // }
  const blockProperties = {
    id: 0,
    vertical: 1,
  };
  // value is used to assign curent position of the moving pieces
  let value = 0;
  //  global variable for player score
  let scoreValue = 0;
  //  h1 header that will display the score
  const score = $('<h1>');
  //  assigning text to h1 header
  score.text(`score: ${scoreValue}`);
  // adding class 'landingPageScore' to the h1
  score.attr('class', 'landingPageScore');
  // adding id "score"
  score.attr('id', 'score');
  // appending h1 to the div with id board
  $('#board').append(score);
  // ///////////////////////////////////////////////////////////////////////////
  // ------------------- high score function -----------------------------------
  // function highScores() {
  //   const scoreList = $('<div>');
  //   scoreList.attr('class', 'top5');
  //   highScores.push(new PlayerName($('.playerName').val(), scoreValue));
  //   $('#winPage').append(scoreList);
  // }
  // ///////////////////////////////////////////////////////////////////////////
  // ----------------------------- Landing Page ---------------------------------
  // function that crating the landing page with click event on the button
  function landingPage() {
    // assigning a new div to landPage variabel
    const landPage = $('<div>');
    //  adding class 'Page' on the landPage
    landPage.attr('id', 'land');
    landPage.attr('class', 'Page');

    //  appending the the landing page to the board
    $('#board').append(landPage);
    // creating an input where the player can write his/her name
    const playerName = $('<input>');
    playerName.attr('autofocus', 'autofocus');
    // appending the input to the landing page
    landPage.append(playerName);
    //  adding class 'playerName' on the input
    playerName.attr('class', 'playerName');
    // creating the start button
    const startButton = $('<button>Start</button>');
    // adding class 'startButton' to the start button
    startButton.attr('class', 'button');
    // landing page is appendig the start button
    landPage.append(startButton);
    // adding click event on the start button
    startButton.click(() => {
      // starting function that is triger by the click
      // replacing the game name text with player name
      $('.name').text(`Now Playing ${(playerName).val()}`);
      // changing the class of the lending page, new class will add animation
      // to the lancing page and close it in the middle of the screen
      landPage.addClass('closeLandPage');
      // turning off the button and the input
      playerName.css('display', 'none');
      startButton.css('display', 'none');
      // changing the style of the text that display the player name and the score
      $('.name').addClass('playerNameAndScore');
      score.addClass('playerNameAndScore');
      setTimeout(gamePageLoad, 1100);
      // closing event listener
    });
    // closing landingPage function
  }
  // ----------------------------- End of Landing Page --------------------------
  // ////////////////////////////////////////////////////////////////////////////
  // ----------------------------- Closing Page ---------------------------------
  function winLosePage() {
    const winPage = $('<div>');
    winPage.attr('class', 'Page');
    winPage.attr('id', 'winPage');
    const restart = $('<button>Restart</button>');
    restart.addClass('button');
    restart.attr('id', 'restart');
    winPage.append(restart);
    $('.name').text(`Game Over! ${$('.playerName').val()}`);
    $('#board').append(winPage);
    $(document).off('keydown');
    $('#restart').click(() => {
      location.reload();
    });
  }
  // ----------------------------- End of closing page -------------------------
  // ///////////////////////////////////////////////////////////////////////////
  // --------------------function that create block pieces----------------------
  function block(speeds, vertical) {
    const piece = $('<div>');
    piece.addClass('block');
    piece.addClass('blockMove');
    piece.attr('id', `blockPice${blockProperties.id}`);
    // piece.css('width', width);
    piece.css('bottom', vertical);
    const check = setInterval(() => {
      const positio = $('.blockMove').css('right');
      value = parseInt(positio);
      // ------------- stop the interval----------------------------------------
      if ($('#blockPice17').css('bottom') === `${481}px`) {
        clearInterval(check);
      }
    }, 2);
    $('#gamePage').append(piece);
  }
  // ------------------------------ End of pieces function ---------------------
  // ///////////////////////////////////////////////////////////////////////////
  // ------------------------- Game Page ---------------------------------------
  // functoion that create the game page
  function gamePageLoad() {
  //  creating a div for game page adding class 'page' adn id 'pamePage'
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
        if (blockProperties.vertical < 480) {
          // condition for score for the first two pieces --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${161}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${171}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${171}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${161}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${161}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // ---------------- end of first condition for score ---------------
          // ----------------- condition for the third piece -------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${181}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${131}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${131}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${181}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${315}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${181}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${45}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          // } else if (($(`#blockPice${blockProperties.id}`).css('width') === `${131}px`
          //   && $(`#blockPice${blockProperties.id}`).css('right') < `${44}px`)
          //   || ($(`#blockPice${blockProperties.id}`).css('width') === `${131}px`
          //   && $(`#blockPice${blockProperties.id}`).css('right') > `${315}px`)) {
          //   $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');

          //   $('#gamePage').css('display', 'none');
          //   winLosePage();
          }
          // ---------------- end condition for the third piece ----------------
          // ----------------- condition for the 4-11 piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${193}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${106}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${106}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${193}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${303}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${193}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${83}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for 4-11 piece -------------------
          // ----------------- condition for the 12th piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${205}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${83}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${83}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${205}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${292}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${205}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${117}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for  12th piece -------------------
          // ----------------- condition for the 13th piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${229}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${35}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${35}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${229}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${267}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${229}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${191}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for  13th piece -------------------
          // ----------------- condition for the 14th piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${236}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${20}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${20}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${236}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${259}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${236}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${214}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for  14th piece -------------------
          // ----------------- condition for the 15th piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${238}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${16}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${16}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${238}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${257}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${238}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${219}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for  15th piece -------------------
          // ----------------- condition for the 14th piece --------------------
          if ($(`#blockPice${blockProperties.id}`).css('right') === `${236}px`
            && $(`#blockPice${blockProperties.id}`).css('width') === `${6}px`) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'green');
            scoreValue += 100;
            score.text(`score: ${scoreValue}`);
          } else if ($(`#blockPice${blockProperties.id}`).css('width') === `${6}px`
            && ($(`#blockPice${blockProperties.id}`).css('right') > `${236}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${259}px`
            || $(`#blockPice${blockProperties.id}`).css('right') < `${236}px`
            || $(`#blockPice${blockProperties.id}`).css('right') > `${214}px`)) {
            $(`#blockPice${blockProperties.id}`).css('background-color', 'yellow');
            scoreValue += 10;
            score.text(`score: ${scoreValue}`);
          }
          // -------------------end condition for  14th piece -------------------
          blockProperties.vertical += 30;
          blockProperties.id += 1;
          block(blockProperties.id, blockProperties.vertical);
        }
      }
    });
  }
  // ----------------------------- end of game page ----------------------------
  landingPage();
});
