var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

setGradient();
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function colorRandom () {
	var x = Math.floor(Math.random()*256).toString(16);
	if (x.length < 2) {x = "0" + x}
	return x;

}
function colorChange () {

	color1.value = "#" + colorRandom() + colorRandom() + colorRandom();
	color2.value = "#" + colorRandom() + colorRandom() + colorRandom();
	setGradient();
	console.log(color1.value, color2.value);

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", colorChange);