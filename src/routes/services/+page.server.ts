import { error, type ServerLoad } from '@sveltejs/kit';
import { getServicesQuery } from '$lib/server/sanity/groqQueries';
import { readClient } from '$lib/server/sanity/sanityClient';
import { type SanityImageAssetDocument } from '@sanity/client';

export type Services = {
	services: {
		title: string;
		featured: boolean;
		img: SanityImageAssetDocument;
		serviceDescription: string;
	}[];
};

export const load: ServerLoad = async () => {
	const client = readClient;
	const data = await client.fetch(getServicesQuery);
	if (data) {
		return { services: data };
	}
	error(500, 'Failed to fetch services data from Sanity');
};
