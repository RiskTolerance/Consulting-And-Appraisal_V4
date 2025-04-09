import { type ServerLoad } from '@sveltejs/kit';
import { getPostsQuery } from '$lib/server/sanity/groqQueries';
import { readClient } from '$lib/server/sanity/sanityClient';

export const load: ServerLoad = async () => {
	const client = readClient;
	const data = await client.fetch(getPostsQuery);
	if (data) {
		return {
			posts: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
