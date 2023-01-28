//import { API_KEY } from '$env/static/private';

const api_prefix = '/api/v1/';
const baseUrl = 'https://data.mongodb-api.com/app/data-xjvrs/endpoint/data/v1/';
const verURL = 'https://data.mongodb-api.com/app/data-xjvrs/endpoint/version';
const headers = {
	//apiKey: API_KEY,
	method: 'get'
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith(api_prefix)) {
		return await getAtlasData();
	}

	const response = await resolve(event);
	return response;
}

async function getAtlasData() {
	const response = await fetch(verURL, headers);
	const res = await response.json();
	if (res.ok) return res;
	throw new Error(res.error);
}
