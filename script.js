var raceCar = document.getElementById("raceCar");
var myCar = document.getElementById("myCar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var sound = document.getElementById("sound");
var endSound = document.getElementById("endSound");

//myCar Move
raceCar.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3) * 130;
  raceCar.style.left = random + "px";
  counter++;
});

// raceCar Move
window.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    var myCarLeft = parseInt(
      window.getComputedStyle(myCar).getPropertyValue("left")
    );
    if (myCarLeft < 260) {
      myCar.style.left = myCarLeft + 130 + "px";
    }
    sound.play();
  }

  if (e.keyCode == "37") {
    var myCarLeft = parseInt(
      window.getComputedStyle(myCar).getPropertyValue("left")
    );
    if (myCarLeft > 0) {
      myCar.style.left = myCarLeft - 130 + "px";
      sound.play();
    }
  }
});

// Game over

setInterval(function GameOver() {
  var raceCarTop = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("top")
  );
  var raceCarLeft = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("left")
  );
  var myCarLeft = parseInt(
    window.getComputedStyle(myCar).getPropertyValue("left")
  );
  if (
    raceCarLeft === myCarLeft &&
    raceCarTop > 280 &&
    raceCarTop < 480
  ) {
    result.style.display = "block";
    game.style.display = "none";
    score.style.display = `score:${counter}`;
    counter = 0;
    endSound.play();
  }
}, 10);
purpleCar