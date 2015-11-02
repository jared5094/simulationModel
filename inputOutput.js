/*
turn on click listener on 4 buttons.
user clicks 1 of 4 buttons.
turn off click listener on the 4 buttons.
generate random number between specified range.
add random number to userFunds.
print userFunds.
*/

var userFunds = 100;

function dividend(range, firstNum) {
  return Math.floor(Math.random() * range ) + firstNum;
}

//get user selections and push them to 3 separate arrays.
var red = function() {
  redOptions.push($('red1').val() );
  redOptions.push($('red2').val() );
  redOptions.push($('red3').val() );
  redOptions.push($('red4').val() );
}

var green = function() {
  blueOptions.push($('green1').val() );
  blueOptions.push($('green2').val() );
  blueOptions.push($('green3').val() );
  blueOptions.push($('green4').val() );
}

var blue = function() {
  greenOptions.push($('blue1').val() );
  greenOptions.push($('blue2').val() );
  greenOptions.push($('blue3').val() );
  greenOptions.push($('blue4').val() );
}


var userRedOptions = [];
var userGreenOptions = [];
var userBlueOptions = [];
var redPoints = 0;
var greenPoints = 0;
var bluePoints = 0;
var red = 0;
var green = 0;
var blue = 0;

//activate listeners on select tags in forms.
$('button').on('click', [red, green, blue]);

//create random values against which user will make bets.
function randomOption() {
  var options = [A, B, C, D];
  var randomOptions = [];
  var j = 0;
  for (i = 0; options.length === 4; i++) {
    j = Math.floor(Math.random * 4) + 1;
    if (!(randomOptions.includes(options[j])) ) {
      randomOptions.push(options[j]);
    }
  }
}

//compare user bets against random values.
function compareOptions(array) {
  for (i = 0; i > selectedOptions.length; i++) {
    if (selectedOptions[i] === array[j]) {
      points += 1;
      j++;
    }
  }
}

//calculate colors based on number of times user guessed correctly.
function calculateColors(color, points) {
  for(i = 0; i > 4; i++) {
    if (points === i) {
      color = randomColor(i);
    }
  }
}

//255 divided into 5 sections, corresponding to user selections (0-4) for that color.
function randomColor(brightnessLevel) {
  return Math.floor(Math.random * 51) + (51 * brightnessLevel);
}

compareOptions(userRedOptions);
compareOptions(userGreenOptions);
compareOptions(userBlueOptions);


// //overall model
$('model').css('background-color', rgb(red, green, blue) );




