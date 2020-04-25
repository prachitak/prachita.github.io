var buttonCount = document.querySelectorAll(".drum").length;

// Detect Button Click
for (i = 0; i < buttonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}

// Detect keypress
document.addEventListener("keydown", function(){
  playSound(event.key);
  makeAnimation(event.key);
});

function makeAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
}

function playSound(key) {

  switch (key) {
    case "w":
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;

    case "a":
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;

    case "s":
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;

    case "d":
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;

    case "j":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;

    case "k":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;

    case "l":
      var audioKickBass = new Audio("sounds/kick-bass.mp3");
      audioKickBass.play();
      break;

    default:
      console.log(key);
  }
}
