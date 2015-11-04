/*
array sorted randomly:
  display array1 from A-D.
  duplicate array randomly mixed:
  j = random number from 1-4.
  if !(array1.includes(j) )
    push array1[j] to array2.


print out html 4 times:
  var1 storing select tags and options and var2
  var2 storing select tag id
  loop prints var1 4 times, changing var2 each time.
  var2 = string + var3.
  var3 = number.
  each iteration, var3++, convert var3 to string, join to var2.


user chooses options
user clicks submit
get values for each select tag
push values to array

event listener on each select tag:
var1 = select tag id.
create array item from .val() on each select tag.

compare user bets to random arrays
log point score

modify color scheme based on point score:

divide red color numbers into 5 groups: first group is 1-51.
store groups as items in array
determine red color group based on point score.
display average color of red color group in p element

*/


var redLetters = ["A", "B", "C", "D"];
var redIDTags = [];
var redRandomLetters = [];
var userBets = [];
var points = 0;

//perform loop until redRandomLetters is same size as redLetters. Each iteration: get random number between
//0 and 3. If redRandomLetters doesn't contain random letter from redLetters, push it to redRandomLetters.
function randomLetters() {
  var j = 0;
  while (redRandomLetters.length < redLetters.length) {
    j = Math.floor(Math.random() * 4);
    if (redRandomLetters.indexOf(redLetters[j]) === -1) {
      redRandomLetters.push(redLetters[j]);
    }
  }
}


function generateTags() {
  //create variable storing select and option tags, including variable storing select tag ID.
  var redOptionsID = "";
  var redOptionsHTML =
  "<select>" +
    "<option val='A'>A</option>" +
    "<option val='B'>B</option>" +
    "<option val='C'>C</option>" +
    "<option val='D'>D</option>" +
  "</select>";

  //loop: prepend select and option tags,
  //and create unique ID for each select tag and apply it.
  var redID = "red";
  var j = 0;
  for (var i = 0; i < redLetters.length; i++) {
    $('#userBets').append(redOptionsHTML);
    redOptionsID = redID.concat(j.toString());
    redIDTags.push(redOptionsID);
    $('#userBets').children('select').last().attr("id", redOptionsID);
    j += 1;
  }
  $("#userBets").append("<input type='submit'>")
}

//compare userBets against random ranking of letters. Add point when they match.
function checkBets() {
  var j = 0;
  for (var i = 0; i < redLetters.length; i++) {
    if (userBets[i] === redRandomLetters[j]) {
      points += 1;
    }
    j += 1;
    console.log(points);
  }

}

/*
this function is designed for the css color format: rgb(0,0,0), specifically the red light.
the medianColors array contains 5 'median' values derived from the color range of 255.
the function determines median color for red light based on point score, then displays it.
*/
function displayColor() {
  var medianColors = [25, 76, 127, 178, 229];
  for (i = 0; i < 5; i++) {
    if (i === points) {
      $('#displayColor').css({'background-color': "rgb(" + medianColors[i] + ",0,0)" });
    }
  }
}

randomLetters();
generateTags();

//event handler for submit feature of #userBets form.
//get value of each select tag and push it to userBets array.
//activate other functions.
$('#userBets').on('submit', function(event) {
  event.preventDefault();
  for (var i = 0; i < redLetters.length; i++) {
    userBets.push($('#' + redIDTags[i]).val() );
  }
  console.log(userBets);
  console.log(redRandomLetters);
  checkBets();
  displayColor();
});








