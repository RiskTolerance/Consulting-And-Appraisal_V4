import { readWriteClient } from '$lib/server/sanity/sanityClient';
import type { Actions } from './$types';
import slugify from 'slugify';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		const subscriber = data.get('subscriber') === 'on';

		const mutations: any = [
			{
				create: {
					_type: 'formResponse',
					name,
					email,
					message,
					newsletterSubscriber: subscriber
				}
			}
		];

		// If they want to subscribe, also add to the newsletterSubscriber collection
		if (subscriber) {
			mutations.push({
				createIfNotExists: {
					_type: 'newsletterSubscriber',
					// Use the email as the _id if you want to de-dupe by email
					// You can also use a custom slug or hashed email if needed
					_id: `emailsubscriber.${slugify(email, { remove: /[*+~.()'"!:@]/g, lower: true })}`,
					name,
					email
				}
			});
		}

		try {
			const result = await readWriteClient.mutate(mutations);
			console.log('Mutations successful:', result);
		} catch (err) {
			console.error('Mutation failed:', err.message);
		}
	}
} satisfies Actions;
