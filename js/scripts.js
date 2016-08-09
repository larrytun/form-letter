$(document).ready(function() {
  $("#mainForm").submit(function(event) {

    $("#nameOutput").text($("input#personName").val());
    event.preventDefault();
  });
});
