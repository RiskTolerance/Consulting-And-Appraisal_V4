import { readWriteClient } from '$lib/server/sanity/sanityClient';
import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
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
			const resend = new Resend(RESEND);
			const emailHtml = `
					<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
						<h2 style="color: #2c3e50;">📬 New Form Response</h2>
						<hr style="border: 1px solid #eaeaea;">
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
						<p><strong>Message:</strong><br>${message}</p>
						<p><strong>Subscribed to Newsletter:</strong> ${subscriber ? '✅ Yes' : '❌ No'}</p>
						<hr style="border: 1px solid #eaeaea;">
						<footer style="font-size: 0.9em; color: #777;">
							<p>This message was sent from your website form.</p>
						</footer>
					</div>
				`;

			resend.emails.send({
				from: 'admin@consultingappraisal.com',
				to: ['isaac.druin@gmail.com', 'wade.druin@consultingappraisal.com'],
				subject: 'New Form Response',
				html: emailHtml
			});

			console.log('Mutations successful:', result);
			console.log('Email successful:', resend);
		} catch (err) {
			console.error('Mutation failed:', err.message);
		}
	}
} satisfies Actions;
