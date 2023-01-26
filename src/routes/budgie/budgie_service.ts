// Budgie Service

const baseUrl = 'https://data.mongodb-api.com/app/data-xjvrs/endpoint/data/v1/';
const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Request-Headers': '*',
	'api-key': '63ceca3ff5e2936d33a8e76b',
  'method': 'post',
  'data': {
    "collection": "config",
    "database": "budgie",
    "dataSource": "ClusterMain",
    "projection": {
        "_id": 1
    }
  }
};


export async function getBudgieData(key: string) {
  const response = await fetch(baseUrl, { headers });
  const res = await response.json();
  if (res.ok) return res;
  throw new Error(res.error);
}