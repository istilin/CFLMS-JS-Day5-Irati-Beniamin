var sandwiches = `{ "sandwich": "Hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandwiches_array = JSON.parse(sandwiches);
var fries_array = JSON.parse(fries);
console.log(sandwiches_array)
console.log(fries_array)

document.getElementById('result').innerHTML += "My favorite sandwich is a " + sandwiches_array.sandwich + " which has approximately " + sandwiches_array.calories + " caloriess, along with it I enjoy eating " + fries_array.fries_size + " which have about " + fries_array.calories + " calories.";


var food_array = JSON.parse(food)

document.getElementById('result2').innerHTML += "My favorite sandwich is a " + food_array[0].sandwich + " which has approximately " + food_array[0].calories + " caloriess, along with it I enjoy eating " + food_array[1].fries_size + " which have about " + food_array[1].calories + " calories.";