let error = "Please make sure that the number you're counting to is larger than the number you're counting by."

let makeNumber = function(input) {
  let stringNumber = $(input).val();
  return parseInt(stringNumber);
}

let makeItPrint = function(input) {
  let toPrint = input.join(", ");
  $('#keepingCount').html(toPrint)
}

let compareNumbers = function(countTo, countBy) {
  let trackCount = []
  if (countTo >= 1 && countBy > countTo) {
    $('#errorMessage').empty();
    $('#errorMessage').append(error)
  }
  else if (countTo <=0 && countBy <=0) {
    $('#errorMessage').empty();
    for (var index = 0; index < countTo; index -= countBy) {
      trackCount.push(index);
    }
    makeItPrint(trackCount);
  }
  else {
    $('#errorMessage').empty();
    for (var index = countBy; index <= countTo; index += countBy) {
      trackCount.push(index);
    }
    makeItPrint(trackCount);
  }
}

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let countTo = makeNumber($('#countTo'));
    let countBy = makeNumber($('#countBy'));
    compareNumbers(countTo, countBy);


  });
});
