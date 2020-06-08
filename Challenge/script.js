var cars_array = JSON.parse(cars)
const car_box = document.getElementById("carbox")

for (i = 0; i < cars_array.length; i++){

	// Create elements on the list
	var div_element = document.createElement("div")
	var paragraph_element = document.createElement("p")
	var image_element = document.createElement("img")

	// Append elements to the list
	car_box.appendChild(div_element)	
	div_element.appendChild(paragraph_element)
	paragraph_element.innerText = `Name of our hero: ${cars_array[i].name}.`
	image_element.setAttribute("src", cars_array[i].source)
	div_element.appendChild(image_element)



}