import prisma from '$lib/prisma';

type Post = {
  title: string;
  body: string;
}

async function getPosts() {
  const response = await fetch('http://dummyjson.com/posts')
  const { posts } = await response.json();
  return posts as Post[];
}

function slugify(text: string) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

async function main() {
  const posts = await getPosts();

  await prisma.user.create({
    data:{
      email: 'jb@nvn.io',
      name: 'JB'
    }
  });

  for (const post of posts) {
  await prisma.post.create({
		data: {
			title: post.title,
			content: post.body,
			slug: slugify(post.title)
		}
	});
  }
}

main()