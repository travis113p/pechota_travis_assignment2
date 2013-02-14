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

//boolean
var casesPerHour = function(met, notMet) {
	if (notMet < met) {
		var casesPerHour = true;
	} else {
		var casesPerHour = false;
	};
	return casesPerHour;
};

//


//fxn calls
longDay(aisles.length)

var yelledAt = casesPerHour(70,40)
console.log("I have not met my quota, it is " + yelledAt + " that I will most likely be scolded.")