//variables
var replies = ["Yes", "No", "How Shoould i know?", "Feed me and then i'll tell you", "Maaaybe," ];
var sounds = ["yes", "no", "how", "feedme", "maybe"];
var eyes = ["eyes", "eyes2", "eyes3", "eyes4", "eyes5", "eyes6", "eyes7"];
var randomNum = 0;
var roundEyes = 0;


//function that answer questions 
//funtion play sound when we hit submit
function playSounds(r){
	audioElement.setAttribute('src', 'assets/sound/'+sounds[r]+ '.mp3'); 
	audioElement.play(r);

}


//generate random number
function randomNumGenerator(arrayName){
	return Math.floor(Math.random() * arrayName.length); 

	//say math.random = 0.1 x array.length(0.5) this will return a number between o and 4 0.5 replies .length return number less than or equal to
	//math.random generates a value between (0,1);
	//replies.length
	//Math.floor returns a number less than or equal to a specified number
	//google Math.floor
}

//load init function on load
//answer question function
function answerQuestion(){
	randomNum = randomNumGenerator(replies);
	console.log("Random Reply Num:"+ randomNum);

	//vanilla js:documentgetElementbyId("speech").textContent = replies[randomNum];
	$("speech").text(replies[randomNum]);

	//call sound functio
	playSounds(randomNum);

	// the eyse are a background image
	randomEyes = randomNumGenerator(eyes);
	//vanilla js:document.getElementById("eyes").style.backgroundImage = "url('assets / img /' "+eyes(randonEyes]+'png';
	$('#eyes').css('background', 'url("assets/img/ ' + eyes[randomEyes] + '.png") no-repeat');
	$('#eyes').css('background-size', "100% auto");
}

// init function - on initiation
function init(){
	console.log("Hello world");

	//create element with vanilla js
	audioElement = document.createElement("audio");
	audioElement.setAttribute("autoplay", "autoplay"); //look at audio controlls on 3schools

	//var submit = document.getElementById("submit");
	//submit addlistener("click, function(){
	//asset questions();
		//})
}
$(submit).click(function(){
	answerQuestion();
});

//writing from botton up look for somethign first and call it allows for less errors

$(document).ready(function(){
init(); //wrap pieces of code

});