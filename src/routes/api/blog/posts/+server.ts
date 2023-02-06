import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const posts = await prisma.post.findMany({});
	return json(posts);
}

export async function POST(request) {
	const { title, content } = request.body;
	const post = await prisma.post.create({
		data: {
			title,
			content
		}
	});
	return json(post);
}
