
//Mouse click events
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var btnPRessed = this.innerHTML;//using this.innerHTML we are getting alphabet of current clicked html
    makeSound(btnPRessed);
    buttonAnimation(btnPRessed);
  });

}

//Keyboard key press events
document.addEventListener("keydown",function(e){
  pressedAlphabet=e.key;//e has list of keyboard events. with e.key we can access current key pressed.
  makeSound(pressedAlphabet);
  buttonAnimation(pressedAlphabet);
});

function makeSound(mykeyandClick){
  switch (mykeyandClick) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
        console.log0("Default Case");
  }
}

function buttonAnimation(keyORclick){
  var activeBtn = document.querySelector("."+keyORclick);//this will target the class wgich we have in btn tag(.w,.a etc..)
  activeBtn.classList.add("pressed");
  setTimeout(function(){
      activeBtn.classList.remove("pressed");
  },100);
}
