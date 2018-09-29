


$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let countTo = $('#countTo').val();
    let countBy = $('#countBy').val();
    console.log(countTo, countBy);


  });
});
