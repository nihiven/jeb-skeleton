import { fail } from '@sveltejs/kit';
// import { API_KEY } from '$env/static/private';

export const actions = {
	default: async () => {
		console.log('actions.default');
		const response = await fetch(`https://data.mongodb-api.com/app/data-xjvrs/endpoint/data/v1/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Request-Headers': '*'
				//'api-key': API_KEY
			},
			body: JSON.stringify({
				collection: 'config',
				database: 'budgie',
				dataSource: 'ClusterMain',
				projection: {
					_id: 1
				}
			})
		});
		const res = await response.json();
		if (res.ok) {
			console.log(res);
			return res;
		}
		return fail(403, res.error);
	}
};
// https://kit.svelte.dev/docs/hooks#server-hooks
// https://learn.svelte.dev/tutorial/env-static-private
/*
curl test

curl --location --request POST 'https://data.mongodb-api.com/app/data-xjvrs/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: ksE7997VswPfHfpO01HrgQ0unLpu5HCn2hiGr0M4tfhtlPlJhbbJQc5UdSb8n4jn' \
--data-raw '{
    "collection":"config",
    "database":"budgie",
    "dataSource":"ClusterMain",
    "projection": {"key": 1, "value": 1, "_id": 0}
}'

*/
