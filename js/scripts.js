$(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var inputSentence = $("#iSentence").val().toUpperCase();
    $("ul#output").append("<li>" + inputSentence + "!!!!</li>");
  });
});
