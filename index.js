$(document).ready(function(){
//wait until doc has loaded
var submitButton = $("#submit-btn");

submitButton.on("click", function(event){
	var input = $("#city-type").val(){
	//type NYC and image of NYC wil be the background
	if (input === "NYC" || "New York City"|| "New York"){
	$(".container").css("background-image" url("images/nyc.jpg"));
	}
	//type SF and image of SF wil be the background
	else if (input === "San Francsico"|| "SF"|| "Bay Area"){
	$(".container").css("background-image" url("images/sf.jpg"));
	}
	//type LA and image of LA wil be the background
	else if (input === "Los Angeles"|| "LA"|| "LAX"){
	(".container").css("background-image" url("images/la.jpg"));
	}
	//type Austin and image of Austin wil be the background
	else if (input === "Austin"|| "ATX"){
	(".container").css("background-image" url("images/austin.jpg"));
	}
	//type Sydney and image of Sydney wil be the background
	else (input==="sydney", "SYD"){
	(".container").css("background-image" url("images/sydney.jpg"));
	}
}
});
});
