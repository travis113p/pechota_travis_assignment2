//variables
var day = "Thursday";
	hours = 7;
	aisles = ["Soups", "Juices", "Candy"];
	longDayProclaim = "It's going to be a long day."
	shortDayProclaim = "It should be a quick day."
	
//procedure
var longDay = function(numOfAisles) {
	if (numOfAisles > 3) {
		console.log(longDayProclaim);
	} else {
		console.log(shortDayProclaim);
	};
};




//fxn calls
longDay(aisles.length)