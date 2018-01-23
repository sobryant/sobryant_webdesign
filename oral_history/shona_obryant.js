$(document).ready(function(){

var audio = document.getElementById("losAudio");
var btn_playPause = document.getElementById("btn_playPause");

function losAudio_playPause() {
  var isPaused = losAudio.paused;
  losAudio[isPaused ? "play" : "pause"]();
  this.style.backgroundPosition= "0 "+ (isPaused ? "-32px":"0px");
}

btn_playPause.addEventListener("click", losAudio_playPause);
});
