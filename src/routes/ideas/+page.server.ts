import { type ServerLoad } from '@sveltejs/kit';
import { type SanityImageAssetDocument } from '@sanity/client';
import { getPostsQuery } from '$lib/server/sanity/groqQueries';
import { readClient } from '$lib/server/sanity/sanityClient';

export type Posts = {
	posts: {
		date: string; // ISO date string from 'publishedOn'
		title: string;
		slug: string;
		author: string;
		img: SanityImageAssetDocument;
		imgAlt: string;
		featured: boolean;
		body: string; // Could be undefined if no content
		excerpt: string; // Could be undefined if no excerpt
	}[];
};

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
