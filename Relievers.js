let test = document.getElementById("cat");
test.addEventListener("mouseover", func, false);
test.addEventListener("click", func3, false);
test.addEventListener("mouseout", func2, false);

function func(){
    test.src="images/cat2.png";
}
function func3(){
    audio.play();
}
function func2(){
    test.src="images/cat.png";
}
document.getElementById("button").onclick = function () {
    document.getElementById("button").volume = 1;
    audio2.play();
};