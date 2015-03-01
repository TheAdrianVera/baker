var latitude = 0; 
var longitude = 0;
var myLocation = [longitude, latitude];
var outOfRange = false;
var whiteHouse = false; 
var whiteHouseLocation = [38897, 77036];
var lincolnMemorial = false;
var lincolnMemorialLocation = [38889, 77050];
var washingtonMonument = false; 
var washingtonMonumentLocation = [388889, 77035];

// ------------- GetUsersLocation -------------

function geoFindMe() {
 var output = document.getElementById("phrase");

 if (!navigator.geolocation){
   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
   return;
 }

 function success(position) {
   var latitude  = position.coords.latitude;
   var longitude = position.coords.longitude;

   output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>'; // could remove this

   //var img = new Image();
   //img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

   //output.appendChild(img);
 };

 function error() {
   output.innerHTML = "Unable to retrieve your location";
 };

 output.innerHTML = "<p>Locating…</p>"; //could remove this 

 navigator.geolocation.getCurrentPosition(success, error); //could remove this 
}

// ------------- check where user is ------------- 

function checkMyLocation(){

	trunkate(longitude, latitude) // is this correct

	if (myLocation[0] == whiteHouseLocation[0] && myLocation[1] == whiteHouseLocation[1]){
		whiteHouse = true;
	}
	else if (myLocation[0] == lincolnMemorialLocation[0] && myLocation[1] == lincolnMemorialLocation[1]{
		lincolnMemorial == true;
	}
	else if (myLocation[0] == washingtonMonumentLocation[0] && myLocation[1] == washingtonMonumentLocation[1]){
		washingtonMonument = true;
	}
	else{
		outOfRange = true;
	}

}
		// ------------- Used inorder to trunkate location that is double -------------

function trunkate(numLog , numLat){                          //takes in myLocation an array with [longitdude, latitude]
	numLog = myLocation[0];
	numLat = myLocation[1];

	while (numLog <= 10000){
		numLog = numLog/(0.1);
	}

	while (numLat <= 10000){
		numLat = numLat/0.1;
	}

	myLocation[0] = Math.floor(numLog);
	myLocation[1] = Math.floor(numLat);
}

// ------------- setsDivs to top 5 questions -------------

//give question divs the #IDs questionOne, questionTwo ... questionFive
function setQuestions(){

	if (whiteHouse == true){

		var query_params = "&keyword= White House";
		var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

		$(document).ready(function() {
			$.ajax({
				type: "GET",
				url: endpoint,
				data: query_params,
				success: function(data) {
				document.getElementById("questionOne").innerHTML=(data.result[1].title);  //the index of result gets you the question. 
				document.getElementById("questionTwo").innerHTML=(data.result[2].title);
				document.getElementById("questionThree").innerHTML=(data.result[3].title);
				document.getElementById("questionFour").innerHTML=(data.result[4].title);
				document.getElementById("questionFive").innerHTML=(data.result[5].title);
					//answer for answer 
					//title for Question
				}
			});
		});
	}

	else if (lincolnMemorial == true){

		var query_params = "&keyword= Lincoln Memorial";
		var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

		$(document).ready(function() {
			$.ajax({
				type: "GET",
				url: endpoint,
				data: query_params,
				success: function(data) {
				document.getElementById("questionOne").innerHTML=(data.result[1].title);  //the index of result gets you the question. 
				document.getElementById("questionTwo").innerHTML=(data.result[2].title);
				document.getElementById("questionThree").innerHTML=(data.result[3].title);
				document.getElementById("questionFour").innerHTML=(data.result[4].title);
				document.getElementById("questionFive").innerHTML=(data.result[5].title); //answer for answer , title for question
				}
			});
		});
	}

	else if (washingtonMonument == true){

		var query_params = "&keyword= washingtonMonument";
		var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

		$(document).ready(function() {
			$.ajax({
				type: "GET",
				url: endpoint,
				data: query_params,
				success: function(data) {
				document.getElementById("questionOne").innerHTML=(data.result[1].title);
				document.getElementById("questionTwo").innerHTML=(data.result[2].title);
				document.getElementById("questionThree").innerHTML=(data.result[3].title);
				document.getElementById("questionFour").innerHTML=(data.result[4].title);
				document.getElementById("questionFive").innerHTML=(data.result[5].title);
				}
			});
		});
	}

	else{

		document.getElementById("phrase").innerHTML="Please walk within 100ft of the nearest landmark.";
		document.getElementById("questionOne").innerHTML="";  //the index of result gets you the question. 
		document.getElementById("questionTwo").innerHTML="";
		document.getElementById("questionThree").innerHTML="";
		document.getElementById("questionFour").innerHTML="";
		document.getElementById("questionFive").innerHTML="";
	}
}





