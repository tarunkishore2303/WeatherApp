$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	var rain = "rain";
	var clouds = "clouds";

	if (n >= 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	//   if(condition.match(/rain/g)){
	// 	  $("body").addClass("rain")
	//   }
	  
	else if (n >= 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});