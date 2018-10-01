//Back-end logic

//Define error messages.
let error = "Please make sure that the number you're counting to is larger than the number you're counting by."
let posNegError = "Please don't use one negative number and one positive number."

//Get user input.
let makeNumber = function(input) {
  let stringNumber = $(input).val();
  return parseInt(stringNumber);
}
//Define a function to join an array with a specific character and then push it to the html tag.
let makeItPrint = function(input) {
  let toPrint = input.join(", ");
  $('#keepingCount').html(toPrint)
}
//Figure out if user input is valid and then use for loops to count.
let compareNumbers = function(countTo, countBy) {
  let trackCount = []
  //Display error if user is trying to count by a number larger than the one they're counting to.
  if (countTo >= 1 && countBy > countTo) {
    $('#errorMessage').empty();
    $('#errorMessage').append(error)
  }
  //Display error if user is trying to use one negative number and one positive number.
  else if (countTo < 0 && countBy > 0 || countTo > 0 && countBy < 0) {
    $('#errorMessage').empty();
    $('#errorMessage').append(posNegError)
  }
  //For loop for counting negative numbers.
  else if (countTo < 0 && countBy < 0) {
    $('#errorMessage').empty();
    for (var index = countBy; index >= countTo; index += countBy) {
      trackCount.push(index);
    }
    makeItPrint(trackCount);
  }
  //For loop for counting positive numbers.
  else {
    $('#errorMessage').empty();
    for (var index = countBy; index <= countTo; index += countBy) {
      trackCount.push(index);
    }
    makeItPrint(trackCount);
  }
}

//Front-end logic.
$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let countTo = makeNumber($('#countTo'));
    let countBy = makeNumber($('#countBy'));
    compareNumbers(countTo, countBy);
  });
});
