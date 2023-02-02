import { env } from '$env/dynamic/private';

const API_VERSION = 'https://data.mongodb-api.com/app/data-xjvrs/endpoint/version';

export const GET = async ({ request }) => {
	//const authHeader = request.headers.get('Authorization');

	const res = await fetch(API_VERSION);
	const data = await res.json();
	console.log(data);
	if (res.ok) {
		console.log('ok');
		return new Response(data, { status: 200 });
	} else {
		console.log('error');
		return new Response(data, { status: 500 });
	}
};
