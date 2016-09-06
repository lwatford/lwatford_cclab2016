//animate one object
//when page loads cog rotates to the right
//create a cog that spins to the right
//create a cog that spins to the left estabblish after the first cog rotates properly


document.addEventListener('DOMContentLoaded', function(){

console.log("Ready!");

var looper = setTimeout("rotateAnimation"); //rotate without a pause
var degrees = 0;
var img1 = document.getElementById("img1");



//established rotate animation. I want the object to rotate 360 degrees
function rotateAnimation(){
	if(navigator.userAgent.match("Chrome")){
		cogright.style.WebkitTransfrom = "rotate("+ degrees +"deg)";
	// }else {
	// 	elem.style.transform = ("rotate("+degrees+"deg)";
	// }
	//no need will see in chrome only
}

looper = setTimeout("rotateAnimation(" + el + " , " + speed + ")" , speed);
degrees++;
if(degrees > 359){
	degrees = 1;
}


document.getElementById("status").innerHTML = "rotate(" + degrees + "deg)";

};

rotateAnimation();
});