import type { Actions } from './$types';
import { PrismaClient, Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const actions: Actions = {
	compose: async ({ request }) => {
		const data = await request.formData();

		// BUG: not sure about publish_time or the use of !
		const post: Prisma.PostCreateInput = {
			title: data.get('title')!.toString(),
			content: data.get('content')?.toString(),
			publish_time: new Date(data.get('publish_time')!.toString())
		};

		const res = await prisma.post.create({ data: post });
		redirect(303, `/blog/${res.id}`);
	}
};
