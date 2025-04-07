import { z } from 'zod';
import type { Actions } from '../$types';
import slugify from 'slugify';
import { fail } from '@sveltejs/kit';
import { readWriteClient } from '$lib/server/sanity/sanityClient';

export const actions = {
	newsletterSubscribe: async ({ request }) => {
		const data = await request.formData();
		const rawForm = {
			email: data.get('email')
		};
		const emailFormSchema = z.object({
			email: z
				.string({
					required_error: 'Email is required.'
				})
				.email('Please enter a valid email address.')
		});
		try {
			const zParse = emailFormSchema.safeParse(rawForm);
			if (!zParse.success) {
				console.log(zParse.error);
				return fail(400, {
					error: 'Validation failed',
					errors: {
						...zParse.error.flatten().fieldErrors,
						data: { ...rawForm }
					}
				});
			}

			const { email } = zParse.data;
			const mutations: any = [
				{
					createIfNotExists: {
						_type: 'newsletterSubscriber',
						// use the email as the id to prevent dupes
						_id: `emailsubscriber.${slugify(email, { remove: /[*+~.()'"!:@]/g, lower: true })}`,
						email
					}
				}
			];

			const mutationResult = await readWriteClient.mutate(mutations);
			console.log('Mutations successful:', mutationResult);
		} catch (err) {
			console.error('Something went wrong:', err.message);
		}
	}
} satisfies Actions;
