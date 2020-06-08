var cars_array = JSON.parse(cars)
const car_box = document.getElementById("carbox")

for (i = 0; i < cars_array.length; i++){

	// Create elements on the list
	var button_element = document.createElement("button")
	button_element.setAttribute("id","button"+i);
	var paragraph_element = document.createElement("p")
	var image_element = document.createElement("img")

	// Append elements to the list
	car_box.appendChild(button_element)	
	button_element.appendChild(paragraph_element)
	paragraph_element.innerText = `${cars_array[i].name}.`
	image_element.setAttribute("src", cars_array[i].source)
	button_element.appendChild(image_element)

	button_element.style.width = "45%";
	button_element.style.display = "flex";
	button_element.style.justifyContent = "center";
	image_element.style.width = "cover";
	image_element.style.height = "12vw";
	button_element.style.padding = "1.5%";
	button_element.style.margin = "1.5%";
	button_element.style.alignItems = "center";

	paragraph_element.style.fontSize = "1.8vw";
	paragraph_element.style.fontFamily = "sans-serif";

	button_element.style.border = "0.3vw solid #7FA2B9"
	button_element.style.borderRadius = "3vw"
	button_element.style.boxShadow = "7px 10px 13px -5px rgba(0,0,0,0.75)";



}


document.getElementById("button0").addEventListener("click", function(){
	document.getElementById("button" + 1).style.display = "none"
	document.getElementById("button" + 2).style.display = "none"
	document.getElementById("button" + 3).style.display = "none"
	})
document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("button" + 0).style.display = "none"
	document.getElementById("button" + 2).style.display = "none"
	document.getElementById("button" + 3).style.display = "none"
	})
document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("button" + 0).style.display = "none"
	document.getElementById("button" + 1).style.display = "none"
	document.getElementById("button" + 3).style.display = "none"
	})
document.getElementById("button3").addEventListener("click", function(){
	document.getElementById("button" + 0).style.display = "none"
	document.getElementById("button" + 1).style.display = "none"
	document.getElementById("button" + 2).style.display = "none"
	})