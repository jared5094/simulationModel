/*
array sorted randomly:
  display array1 from A-D.
  duplicate array randomly mixed:
  j = random number from 1-4.
  if !(array1.includes(j) )
    push array1[j] to array2.


user selects option in index.html:
event listener on #red

compare user bets to random arrays
log point score
modify color scheme based on point score
*/


var redBets = ["A", "B", "C", "D"];
var redLetters = [];

//perform loop until redLetters is same size as redBets. Each iteration: get random number between
//0 and 3. If redLetters doesn't contain random letter from redBets, push it to redLetters.
for (var i = 0; redLetters.length > redBets.length; i++) {
  var j = Math.floor(Math.random * 4);
  if (!(redLetters.includes(redBets[j])) ) {
    redLetters.push(redBets[j]);
  }
}

