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

event listener on each select tag.
create array item from .val() on each select tag.

user selects option in index.html:


compare user bets to random arrays
log point score
modify color scheme based on point score
*/


var redBets = ["A", "B", "C", "D"];
var redLetters = [];

//perform loop until redLetters is same size as redBets. Each iteration: get random number between
//0 and 3. If redLetters doesn't contain random letter from redBets, push it to redLetters.
function randomLetters() {
  var j = 0;
  for (var i = 0; redLetters.length < redBets.length; i++) {
    j = Math.floor(Math.random() * 4);
    if (redLetters.indexOf(redBets[j]) === -1) {
      redLetters.push(redBets[j]);
      console.log(redLetters);
    }
  }
}

function generateTags() {
  //create variable storing select and option tags, including variable storing select tag ID.
  var redOptionsID = "test";
  var redOptionsHTML =
  "<select " + "id='" + redOptionsID + "'>" +
  "<option val='A'>A</option>" +
  "<option val='B'>B</option>" +
  "<option val='C'>C</option>" +
  "<option val='D'>D</option>" +
  "</select>";

  //perform loop 4 times, Each time: append HTML for select and option tags, providing unique ID name
  //for the select tag.
  var redID = "red";
  var j = 0;
  for (var i = 0; i < 4; i++) {
    redOptionsID = redID.concat(j.toString());
    $('#userBets').append(redOptionsHTML);
    j += 1;
  }
}

randomLetters();
generateTags();









