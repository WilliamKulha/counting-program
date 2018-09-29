let makeNumber = function(input) {
  let stringNumber = $(input).val();
  return parseInt(stringNumber);
}

let makeItPrint = function(input) {
  let toPrint = input.join(", ");
  $('#keepingCount').append(toPrint)
}

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let countTo = makeNumber($('#countTo'));
    let countBy = makeNumber($('#countBy'));
    let trackCount = []
    for (var index = countBy; index <= countTo; index += countBy) {
      trackCount.push(index);
    }
    makeItPrint(trackCount);
  });
});
