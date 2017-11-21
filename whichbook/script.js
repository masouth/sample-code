$(document).ready(function() {

  // I love what you are trying to do here!
  //since youve made an object for each type of book we can specify this when we call the which book method
  var fic = {};
  var nonFic = {};
  var easyFic = {};

  easyFic.answers = ["E BER", "E POL", "E WIL", "E MIN", "E SMI", "E KIN"];
  nonFic.answers = ["636.8", "001.7", "323.4", "900.98", "292.2", "741.5"];
  fic.answers = ["FIC KIN", "FIC HAH", "FIC ANG", "FIC PAU", "FIC RUS", "FIC DUP"];

  fic.whichBook = function() { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * fic.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = fic.answers[randomIndex];

    $("#answer2").text(answer);

    console.log(answer);
  };

  // fic.whichBook("Which fiction book?");

  //});//

  nonFic.whichBook = function() { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * nonFic.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = nonFic.answers[randomIndex];

    $("#answer3").text(answer);

    console.log(answer);
  };

  // nonFic.whichBook("Which NF book?");

  //});//
  easyFic.whichBook = function() { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * easyFic.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = easyFic.answers[randomIndex];

    $("#answer1").text(answer);

    console.log(answer);
  };

  // easyFic.whichBook
  $("#ficButton").click(easyFic.whichBook);
  $("#fictionButton").click(fic.whichBook);
  $("#nonFicButton").click(nonFic.whichBook);

  //have tried each one!!! above and below

  //button.click(fic.whichBook);

});
