let makeNumber = function(input) {
  let stringNumber = $(input).val();
  return parseInt(stringNumber);
}

let makeItPrint = function(input) {
  let toPrint = input.join(", ");
  $('#keepingCount').html(toPrint)
}

let error = "Please make sure that the number you're counting to is larger than the number you're counting by."

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let countTo = makeNumber($('#countTo'));
    let countBy = makeNumber($('#countBy'));
    let trackCount = []
    if (countBy >= countTo) {
      $('#errorMessage').empty();
      $('#errorMessage').append(error)
    }
    else if (countTo <=0 && countBy <=0) {
      
    }
    else {
      $('#errorMessage').empty();
      for (var index = countBy; index <= countTo; index += countBy) {
        trackCount.push(index);
      }
      makeItPrint(trackCount);
    }
  });
});
