var targetNumber = 0;
var playerScore = 0;
var wins = 0;
var losses = 0;
var imagesArray = ["assets/images/a.png", "assets/images/b.png","assets/images/c.png","assets/images/d.png"]
const arrayLength = 4;
var numberOptions = [];
var counter = 0;


$("#player-losses").text(losses);
$("#player-wins").text(wins);

function initalizeImages() {
    for (var i = 0; i < arrayLength; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("id", i);
        imageCrystal.attr("src", imagesArray[i]);
        $("#crystals").append(imageCrystal);
    }
}

function initalizeGame() {
    targetNumber = Math.floor(Math.random() * (102)) + 19;
    $("#number-to-guess").text(targetNumber);
    playerScore = 0;
    counter =0;
    $("#player-score").text(playerScore);

    for (var i = 0; i < arrayLength; i++) {
        var temp1 = Math.floor(Math.random() * (12)) + 1;
         $("#"+i).attr("data-crystalvalue",temp1);
           
    }
}

initalizeImages(); 
initalizeGame();
$(".crystal-image").on("click", function() {     
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#player-score").text(counter);

  if (counter === targetNumber) {
    wins++;
    initalizeGame();
    $("#player-wins").text(wins);
    
  }

  else if (counter >= targetNumber) {
    losses++;
    initalizeGame();
    $("#player-losses").text(losses);
  }

});
