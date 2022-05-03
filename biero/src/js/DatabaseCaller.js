/**
 * Returns all beers
 * @returns {Promise<any>}
 */
export async function getAllBeers() {
	const response = await fetch('/api/beers');
	return response.json();
}

//Returns all beers by given parameter and value
/**
 * Finds all beers with given search parameter
 * @param value
 * @returns {Promise<any>}
 */
export async function getBeer(value){
	const response = await fetch(`/api/beer?param=${value}`);
	return response.json();
}

/**
 * Create beer
 * @param data
 * @returns {Promise<Response<any, Record<string, any>, number>>}
 */
export async function createBeer(beerToAdd) {
	console.log(beerToAdd);
	console.log(JSON.stringify({beer: beerToAdd}));
	const response = await fetch('api/beer', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({beer: beerToAdd}),
	});
	return response;
}

/**
 * Edit beer
 * @param data
 * @returns {Promise<Response<any, Record<string, any>, number>>}
 */
export async function editBeer(data){
	const response = await fetch('api/beer', {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	});
	return response;
}

/**
 * Delete beer with given id
 * @param id
 * @returns {Promise<Response<any, Record<string, any>, number>>}
 */
export async function deleteBeer(id){
	const response = await fetch(`api/beer?id=${id}`, {
		method: 'DELETE'
	});
	return response;
}


/**
 * Add to user lists
 * @param id
 * @param beer
 * @returns {Promise<Response<any, Record<string, any>, number>>}
 */
export async function addToList(userid, beerid){
	const response = await fetch('api/list', {
		method: 'POST',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify({userID: userid, beerID: beerid}),
	});
	return response;
}

export async function getList(id){
	const response = await fetch(`api/list/?userID=${id}`);
	return response.json();
}