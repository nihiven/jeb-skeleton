import { API_KEY } from '$env/static/private';

export const GET = ({ request }) => {
	const authHeader = request.headers.get('Authorization');
	console.log(authHeader);
	console.log(API_KEY);

	if (!authHeader) {
		return new Response(JSON.stringify({ error: 'Not authorized.' }), {
			status: 401
		});
	}
	return new Response(JSON.stringify({ posts: [] }), { status: 200 });
};
