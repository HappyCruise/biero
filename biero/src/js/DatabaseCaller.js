export async function getAllBeers() {
	const response = await fetch('/api/beers');
	console.log('GET ALL BEERS');
	return response.json();
}
//Searches by given parameter and value
export async function getBeer(value){
	const response = await fetch(`/api/beer?param=${value}`);
	return response.json();
}

export async function createBeer(data) {
	const response = await fetch('api/beer', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({beer: data})
	}); 
	return response;
}