import type { Actions } from './$types';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const actions: Actions = {
	compose: async ({request}) => {
    const formData = await request.formData();
		const data = formData.entries();
		// TODO: check for errors
		// if form error, highlight errors on form
		// if server error, show error toast
		console.log(data);

		// TODO: when there are no errors
		// create new post
		let post: Prisma.PostCreateInput;
		post = {
			title: data.title,
			content: data.content,
			publish_time: data.publish_time
		};
		const res = await prisma.post.create({data: post});
		// redirect to new post?
	}
};