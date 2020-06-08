var cars_array = JSON.parse(cars)
const car_box = document.getElementById("carbox")

for (i = 0; i < cars_array.length; i++){

	// Create elements
	var button_element = document.createElement("button")
	button_element.setAttribute("id","button"+i);
	var info_element = document.createElement("div")
	var name_element = document.createElement("h1")
	var image_element = document.createElement("img")
	var species_element = document.createElement("p")
	var gender_element = document.createElement("p")
	var occupation_element = document.createElement("p")
	var significant_other_element = document.createElement("p")
	var nationality_element = document.createElement("p")

	// Append elements
	car_box.appendChild(button_element)
	button_element.appendChild(info_element)
	info_element.appendChild(name_element)
	info_element.appendChild(species_element)
	info_element.appendChild(gender_element)
	info_element.appendChild(occupation_element)
	info_element.appendChild(significant_other_element)
	info_element.appendChild(nationality_element)
	name_element.innerText = `${cars_array[i].name}.`
	species_element.innerText = `Species: ${cars_array[i].species}.`
	gender_element.innerText = `Gender: ${cars_array[i].gebder}.`
	occupation_element.innerText = `Occupation: ${cars_array[i].occupation}.`
	significant_other_element.innerText = `Significant other: ${cars_array[i].significant_other}.`
	nationality_element.innerText = `Nationality: ${cars_array[i].nationality}.`
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

	button_element.style.border = "0.3vw solid #7FA2B9"
	button_element.style.borderRadius = "3vw"
	button_element.style.boxShadow = "7px 10px 13px -5px rgba(0,0,0,0.75)";

	info_element.style.display = "flex"
	info_element.style.flexDirection = "column"

	species_element.style.display = "none"
	gender_element.style.display = "none"
	occupation_element.style.display = "none"
	significant_other_element.style.display = "none"
	nationality_element.style.display = "none"

}
document.getElementById("button0").addEventListener("click", function(){
	console.log("button0")
	document.getElementById("button1").style.display = "none"
	document.getElementById("button2").style.display = "none"
	document.getElementById("button3").style.display = "none"
	var current_button = document.getElementById("button0")
	var current_info = current_button.childNodes[0]
	var info_nodes = current_info.childNodes;
	for (i=0; i<info_nodes.length; i++){
	
		info_nodes[i].style.display = "flex"
	}
	
	current_button.style.width = "95%";
	current_button.style.height = "24vw";
	current_button.childNodes[1].style.height = "18vw"

	})
document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("button0").style.display = "none"
	document.getElementById("button2").style.display = "none"
	document.getElementById("button3").style.display = "none"
	var current_button = document.getElementById("button1")
	var current_info = current_button.childNodes[0]
	var info_nodes = current_info.childNodes;
	for (i=0; i<info_nodes.length; i++){
	
		info_nodes[i].style.display = "flex"
	}
	
	current_button.style.width = "95%";
	current_button.style.height = "24vw";
	current_button.childNodes[1].style.height = "18vw"
	})
document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("button0").style.display = "none"
	document.getElementById("button1").style.display = "none"
	document.getElementById("button3").style.display = "none"
	var current_button = document.getElementById("button2")
	var current_info = current_button.childNodes[0]
	var info_nodes = current_info.childNodes;
	for (i=0; i<info_nodes.length; i++){
	
		info_nodes[i].style.display = "flex"
	}
	
	current_button.style.width = "95%";
	current_button.style.height = "24vw";
	current_button.childNodes[1].style.height = "18vw"
	})
document.getElementById("button3").addEventListener("click", function(){
	document.getElementById("button0").style.display = "none"
	document.getElementById("button1").style.display = "none"
	document.getElementById("button2").style.display = "none"
	var current_button = document.getElementById("button3")
	var current_info = current_button.childNodes[0]
	var info_nodes = current_info.childNodes;
	for (i=0; i<info_nodes.length; i++){
	
		info_nodes[i].style.display = "flex"
	}
	
	current_button.style.width = "95%";
	current_button.style.height = "24vw";
	current_button.childNodes[1].style.height = "18vw"
	})