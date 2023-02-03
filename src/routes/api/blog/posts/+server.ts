import prisma from '$lib/prisma'
import { json } from '@sveltejs/kit';

 /** @type {import('./$types').RequestHandler} */
 export async function GET() {
  const posts = await prisma.post.findMany({});
	return json(posts);
 }

 export async function POST(request: any) {
  const { title, content } = request.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return json(post);
 }