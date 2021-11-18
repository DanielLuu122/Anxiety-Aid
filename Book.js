document.getElementById("btn").onclick = function () {
  document.getElementById("input").value = "";
  document.getElementById("input").style.display = "none";
  setTimeout(function(){
    document.getElementById("input").style.display = "block";},
    5000,
  );
  //document.getElementById("fire").style.display = "block";
};
