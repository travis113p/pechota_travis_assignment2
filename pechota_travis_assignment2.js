//variables
var day = "Thursday";
	aisles = ["Soups", "Juices", "Candy"];
	cartsPerAisle = 4;
	longDayProclaim = "It's going to be a long day.";
	shortDayProclaim = "It should be a quick day.";
	additionalAisle1 = "Chips";
	additionalAisle2 = "Coffee";
	
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

//number
var aisleNum = function(number) {
	while (cartsPerAisle <= number) {
		cartsPerAisle = cartsPerAisle + 1;
	}; console.log("I now have " + cartsPerAisle + " carts for each aisle.  I probably won't finish on time.");
	return cartsPerAisle;
};	

//string
var moreAisles = function(numberOne, numberTwo) {
	var chips = "Now I have to do " + numberOne + " as well.";
	var coffee = "And " + numberTwo + "?  I really will be here until 11.";
	return chips + " " + coffee;
};

//array
var aislesDone = function(aisleName, number) {
	for (var done = number; done < aisles.length; done++) {
		console.log("I have finished " + aisles[done] + ".");
	};
	return aisleName + number;
};

//fxn calls
longDay(aisles.length);

var yelledAt = casesPerHour(70, 40);
console.log("I have not met my quota, it is " + yelledAt + " that I will most likely be scolded.");

var carts = aisleNum(7);
console.log("\"Bill, I don't need anymore carts.  I'll be here until 11.\"");

var tooManyAisles = moreAisles(additionalAisle1, additionalAisle2);
console.log(tooManyAisles);

var array = aislesDone(aisles[0], 0);
console.log("Since " + aisles[0] + ", " + aisles[1] + ", and " + aisles[2] + " are all done, and other stockers are finishing, they come to help me finish by 6:30, not 11.");