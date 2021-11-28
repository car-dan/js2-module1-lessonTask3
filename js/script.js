const url = "https://noroff.herokuapp.com/v1/books";

async function getBooks() {
	try {
		const response = await fetch(url);
		const json = await response.json();

		console.log(json);
	} catch (error) {
		console.log(error);
	}
}

getBooks();
