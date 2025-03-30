import { createClient } from '@sanity/client';
import 'dotenv/config';

const Sanity_Token = process.env.SANITY_TOKEN;

export const writeClient = createClient({
	projectId: '4mnt767e',
	dataset: 'production',
	apiVersion: '2022-09-18',
	token: Sanity_Token,
	useCdn: false
});

export const readClient = createClient({
	projectId: '4mnt767e',
	dataset: 'production',
	apiVersion: '2022-09-18',
	useCdn: true
});
