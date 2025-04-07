import { getSinglePost } from '$lib/server/sanity/groqQueries';
import { readClient } from '$lib/server/sanity/sanityClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { SanityImageAssetDocument } from '@sanity/client';
import type { InputValue } from '@portabletext/svelte';

export type SinglePost = {
	post: {
		title: string;
		img: SanityImageAssetDocument;
		imgAlt: string;
		body: InputValue;
	}[];
};

export const load: PageServerLoad = async ({ params }) => {
	const query = getSinglePost(params.slug);
	console.log(query);
	const client = readClient;
	const data = await client.fetch(query);
	if (data) {
		return { post: data };
	}
	return error(404, 'Not Found');
};
