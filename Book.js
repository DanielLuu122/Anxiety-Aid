document.getElementById("btn").onclick = function () {
  document.getElementById("input").value = "";
  document.getElementById("input").style.display = "none";
  document.getElementById("img").style.display = "block";
  var audio = new Audio('campfire-1.mp3');
  audio.play();
  setTimeout(function(){
    document.getElementById("input").style.display = "block";
    document.getElementById("img").style.display = "none";
    audio.pause()
  }, 5000,);
  //document.getElementById("fire").style.display = "block";
};
