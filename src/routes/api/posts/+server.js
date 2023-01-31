import { env } from '$env/dynamic/private';

export const GET = ({ request }) => {
	const authHeader = request.headers.get('Authorization');

	if (!authHeader) {
		return new Response(JSON.stringify({ error: 'Not authorized.' }), {
			status: 401
		});
	}
	return new Response(JSON.stringify({ posts: [] }), { status: 200 });
};
