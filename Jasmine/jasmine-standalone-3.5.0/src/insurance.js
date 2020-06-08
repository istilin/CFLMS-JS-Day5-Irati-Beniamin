/*        

* This is the JavaScript file that need to be tested through jasmine  

* Below is the function that should return

*          

*/   

var calculation = function(country, horse, age){
	
	if (country == "Austria"){
		var insurance = horse * 100 / age + 50;

	} else if (country == "Hungary"){
		var insurance = horse * 120 / age + 100;

	} else {
		var insurance = horse * 150 / (age + 3) + 50;
	}
	return insurance;
};