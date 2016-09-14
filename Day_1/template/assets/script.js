document.addEventListener('DOMContentLoaded', function(){

console.log("Ready!");

//variables
var colorPool = ["#b2ffe9", "#b2bffc", "#f26969"]; //console.log(colorPool[0]) you get #b2ffe9
var seconds = 0; 
var numOfColors = colorPool.length //name-of-the-array.length
var rotateIncrement = 0;
var random = 0;
var parentDiv = document.getElementById("wrapper");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

//pulse variable - stages
var increment = 0;
var direction = 0;
var maxSize = 95;
var minSize = 45;

//create timer function
function timer(){
	setInterval(function(){
		seconds += 1;
		console.log(seconds);
		if(seconds == 100);{
			clearInterval(timer); //opposite of setting
		}
		loadingScreen();
		random = mod(seconds); // now we reassign a new number into this random variable
		// variable with random color run
		console.log("Random:" + random);
		loadingScreen();
		rotateIncrement = seconds * 90;
		parentDiv.style.transform = "rotate(" + rotateIncrement + "deg)"; //rotate(0 degree)
		// parentDiv.style.Webkit.transfrom = "rotate(" + rotateIncrement + "deg)";	
			}, 1000);
}
//create a function that randomises the numbers
function mod(num){
	return num%numOfColors; //%divides first number by second number and is a remainder
}

//create a function that will load our changes to the divs
function loadingScreen(){
	div1.style.backgroundColor = colorPool[mod(random)]; //look at the css the background-color; we will assigm thorugh our array
	div2.style.backgroundColor = colorPool[mod(random + 1)];
	div3.style.backgroundColor = colorPool[mod(random + 2)];
}

//setInterval is a script in javascript

//create pulse function
function pulseSize(){
	setInterval(function() {
		if(increment == 10){
			direction = -1;
		} else if (increment == 0){
		direction = 1;
	}
		increment += direction;
		// console.log("Increment: "+increment);
		div1.style.width = maxSize * increment / 8 + "%";
		div1.style.height = minSize * increment / 10 + "%";
		div2.style.width = maxSize * increment / 7 + "%";
		div2.style.height = minSize * increment / 10 + "%";
		div3.style.width = maxSize * increment / 5 + "%";
		div3.style.height = minSize * increment / 10 + "%";
	},500);
}
pulseSize();
timer();
});