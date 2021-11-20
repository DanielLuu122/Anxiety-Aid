let test = document.getElementById("cat");
test.addEventListener("mouseover", func, false);
test.addEventListener("mouseclick", func3, false);
test.addEventListener("mouseout", func2, false);

function func(){
    test.src="images/cat2.png";
    audio.play();
}
function func3(){
    audio.play();
}
function func2(){
    test.src="images/cat.png";
}