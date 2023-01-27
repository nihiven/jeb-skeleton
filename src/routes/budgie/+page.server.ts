import { fail } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';

export const actions = {
  default: async () => {
    const response = await fetch(`https://data.mongodb-api.com/app/data-xjvrs/endpoint/data/v1/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': API_KEY,
      },
      body: JSON.stringify({
        "collection": "config",
        "database": "budgie",
        "dataSource": "ClusterMain",
        "projection": {
            "_id": 1
        }
      })
    });
    const res = await response.json();
    if (res.ok) return res;
    return fail(403, (res.error);
  }
}
https://kit.svelte.dev/docs/hooks#server-hooks
https://learn.svelte.dev/tutorial/env-static-private