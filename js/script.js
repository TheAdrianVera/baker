$(document).ready(function(){

//geoFindMe();
//checkMyLocation();

var longitude = 38897;
var latitude = 77036;
// var myLocation = [longitude, latitude];
var outOfRange = false;
var whiteHouse = true; 
var whiteHouseLocationX = 38897;
var whiteHouseLocationY = 77036;
var lincolnMemorial = false;
var lincolnMemorialLocationX = 38889;
var lincolnMemorialLocationY= 77050;
var washingtonMonument = false; 
var washingtonMonumentLocationX = 38889;
var washingtonMonumentLocationY = 77035;

// ------------- GetUsersLocation -------------
$('#exploreButton').click(function() {
	setQuestions();
});

function geoFindMe() {

 
 var output = document.getElementById("phrase");

 if (!navigator.geolocation){
   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
   return;
 }

 function success(position) {
 	
   latitude  = position.coords.latitude;
   longitude = position.coords.longitude;

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

	//trunkate(longitude, latitude); // is this correct

	if (longitude == whiteHouseLocationX && latitude == whiteHouseLocationY){
		whiteHouse = true;
	}
	else if (longitude == lincolnMemorialLocationX && latitude == lincolnMemorialLocationY){
		lincolnMemorial == true;
	}
	else if (longitude == washingtonMonumentLocationX && latitude == washingtonMonumentLocationY){
		washingtonMonument = true;
	}
	else{
		outOfRange = true;
	}

}
		// ------------- Used inorder to trunkate location that is double -------------

function trunkate(numLog , numLat){                          //takes in myLocation an array with [longitdude, latitude]
	//var numLog = longitude; //Math.abs
	//var numLat = latitude; //Math.abs

	console.log(longitude);
	console.log(latitude);

	while (longitude <= 10000){
		console.log("hi");
		longitude = longitude*(10);
	}

	while (latitude <= 10000){
		console.log("hi");
		latitude = latitude*(10);
	}

	longitude = Math.floor(numLog);
	latitude = Math.floor(numLat);
}

// ------------- setsDivs to top 5 questions -------------

//give question divs the #IDs questionOne, questionTwo ... questionFive
function setQuestions(){

	//alert("I set questions");

	if (whiteHouse == true){

		var query_params = "&keyword= White House";
		var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

		$(document).ready(function() {
			$.ajax({
				type: "GET",
				url: endpoint,
				data: query_params,
				success: function(data) {
				document.getElementById("questionOne").innerHTML=(data.result[1].title + " ?");  //the index of result gets you the question. 
				document.getElementById("questionTwo").innerHTML=(data.result[2].title + " ?");
				document.getElementById("questionThree").innerHTML=(data.result[3].title + " ?");
				document.getElementById("questionFour").innerHTML=(data.result[4].title + " ?");
				document.getElementById("questionFive").innerHTML=(data.result[5].title + " ?");
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

});

function doIt(){
	if (whitehouse){

$('#questionOneChange').click(function() {

	console.log("Hello");

	var query_params = "&keyword= White House";
	var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: endpoint,
			data: query_params,
			success: function(data) {
				document.getElementById("answer").innerHTML=(data.result[1].answer);
			}
		});
	});

});

$('#questionTwoChange').click(function() {
	var query_params = "&keyword= White House";
	var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: endpoint,
			data: query_params,
			success: function(data) {
				document.getElementById("answer").innerHTML=(data.result[2].answer);
			}
		});
	});		
});

$('#questionThreeChange').click(function() {

	var query_params = "&keyword= White House";
	var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: endpoint,
			data: query_params,
			success: function(data) {
				document.getElementById("answer").innerHTML=(data.result[3].answer);
			}
		});
	});	

});

$('#questionFourChange').click(function() {
	var query_params = "&keyword= White House";
	var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: endpoint,
			data: query_params,
			success: function(data) {
				document.getElementById("answer").innerHTML=(data.result[4].answer);
			}
		});
	});		
});

$('#questionFiveChange').click(function() {
	var query_params = "&keyword= White House";
	var endpoint = 'http://gravity.answers.com/endpoint/searches/questions?key=0365082c633528c9023c21eda59c909804d635b3';

	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: endpoint,
			data: query_params,
			success: function(data) {
				document.getElementById("answer").innerHTML=(data.result[5].answer);
			}
		});
	});		
});
}

}