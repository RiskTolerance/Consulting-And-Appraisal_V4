import { readWriteClient } from '$lib/server/sanity/sanityClient';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		const doc = {
			_type: 'formResponse',
			name: name,
			email: email,
			message: message
		};

		readWriteClient
			.create(doc)
			.then((res) => {
				console.log('Document created, document ID is', res._id);
			})
			.catch((err) => {
				console.error('Create failed: ', err.message);
			});
	}
} satisfies Actions;
