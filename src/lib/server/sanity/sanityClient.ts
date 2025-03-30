import { createClient } from '@sanity/client';
import { SANITY_TOKEN_R } from '$env/static/private';
import { SANITY_TOKEN_RW } from '$env/static/private';

export const readWriteClient = createClient({
	projectId: 'mjp0hm2w',
	dataset: 'production',
	apiVersion: '2025-03-30',
	token: SANITY_TOKEN_RW,
	useCdn: false
});

export const readClient = createClient({
	projectId: 'mjp0hm2w',
	dataset: 'production',
	apiVersion: '2025-03-30',
	token: SANITY_TOKEN_R,
	useCdn: false
});
