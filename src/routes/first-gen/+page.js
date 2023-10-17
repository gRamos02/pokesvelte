// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export async function load({ route, url,params, fetch }) {
	// console.log("Params: ", params)
	console.log("Url: ", url)
	// console.log("Route: ", route)
	let limit = url.searchParams.get('limit');
	let page = url.searchParams.get('page');
	if(!limit || isNaN(parseInt(limit))){
		limit = 5;
	}
	if(!page || isNaN(parseInt(page))){
		page = 1;
	}

	let offset = limit * (page - 1)

	let res;
	try {
		res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}?offset=${offset}`, {
			method: "GET",
		});
		res = await res.json();
	} catch (error) {
		console.log(error);	
	}

	return res; 
}