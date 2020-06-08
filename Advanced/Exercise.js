var books_array = JSON.parse(books)
const list_books = document.getElementById("mylist")

for (i = 0; i < books_array.length; i++){

	// Create elements on the list
	const list_element = document.createElement("li")
	const list_paragraph = document.createElement("p")
	const list_image = document.createElement("img")

	// Append elements to the list
	list_books.appendChild(list_element)	
	list_element.appendChild(list_paragraph)
	list_paragraph.innerText = `Book title: ${books_array[i].title}. Author: ${books_array[i].author}.`
	list_image.setAttribute("src", books_array[i].source)
	list_element.appendChild(list_image)

	// Get read element node
	books_read = books_array[i].read
	if (books_read == "true"){

		list_paragraph.style.backgroundColor = "green"

	} else if (books_read == "false"){
		list_paragraph.style.backgroundColor = "red"
	}


}