/** @type {import('./$types').Actions} */
export const actions = {
	compose: async ({request}) => {
    const data = await request.formData();

		// TODO: check for errors
		// if form error, highlight errors on form
		// if server error, show error toast

		// TODO: no errors
		// create new post
		// redirect to new post?


		console.log(data.get('title'), data.get('content'));
	}
};