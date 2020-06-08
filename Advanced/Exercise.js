var books_array = JSON.parse(books)
const list_books = document.getElementById("mylist")

for (i = 0; i < books_array.length; i++){
	const list_element = document.createElement("li")
	list_books.appendChild(list_element)
	const list_paragraph = document.createElement("p")
	list_element.appendChild(list_paragraph)
	list_element.innerText = `Book title: ${books_array[i].title}. Author: ${books_array[i].author}.`
	const list_image = document.createElement("img")
	list_image.setAttribute("src", books_array[i].source)
	list_element.appendChild(list_image)

}