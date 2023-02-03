/** @type {import('./$types').Actions} */
export const actions = {
	compose: async ({request}) => {
    const data = await request.formData();
		console.log(data.get('title'), data.get('content'));
	}
};