import { readWriteClient } from '$lib/server/sanity/sanityClient';
import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import type { Actions } from './$types';
import slugify from 'slugify';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const rawForm = {
			name: data.get('name'),
			email: data.get('email'),
			message: data.get('message')
		};
		const subscriber = data.get('subscriber') === 'on';

		const contactFormSchema = z.object({
			name: z
				.string({
					required_error: 'Name is required.'
				})
				.min(2, 'Name must be at least 2 characters.')
				.max(65, 'Name must be under 65 characters.'),
			email: z
				.string({
					required_error: 'Email is required.'
				})
				.email('Please enter a valid email address.'),
			message: z
				.string({
					required_error: 'Message is required.'
				})
				.min(10, 'Message must be at least 10 characters.')
				.max(2000, 'Message may not exceed 2000 characters.')
		});

		try {
			const zParse = contactFormSchema.safeParse(rawForm);

			if (!zParse.success) {
				return fail(400, {
					error: 'Validation failed',
					errors: {
						...zParse.error.flatten().fieldErrors,
						data: { ...rawForm, subscriber: subscriber }
					}
				});
			}

			const { name, email, message } = zParse.data;

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
						// use the email as the id to prevent dupes
						_id: `emailsubscriber.${slugify(email, { remove: /[*+~.()'"!:@]/g, lower: true })}`,
						name,
						email
					}
				});
			}

			const mutationResult = await readWriteClient.mutate(mutations);
			console.log('Mutations successful:', mutationResult);

			const resend = new Resend(RESEND);
			const emailHtml = `
					<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
						<h2 style="color: #2c3e50;">📬 New Form Response</h2>
						<hr style="border: 1px solid #eaeaea;" />
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
						<p><strong>Message:</strong><br />${message}</p>
						<p><strong>Subscribed to Newsletter:</strong> ${subscriber ? '✅ Yes' : '❌ No'}</p>
						<hr style="border: 1px solid #eaeaea;" />
						<footer style="font-size: 0.9em; color: #777;">
							<p>This message was sent from your website form.</p>
						</footer>
					</div>
				`;

			const { data, error } = await resend.emails.send({
				from: 'submissions@consultingappraisal.com',
				to: ['isaac.druin@gmail.com', 'wade.druin@consultingappraisal.com'],
				subject: 'New Form Response',
				html: emailHtml
			});
			if (!error) {
				console.log('Email successful:', data);
			} else {
				console.log('Email errors', error);
			}
			return { success: true };
		} catch (err: unknown) {
			console.error('Something went wrong:', err);
		} finally {
			console.log('can I put my email logic here?');
		}
	}
} satisfies Actions;
