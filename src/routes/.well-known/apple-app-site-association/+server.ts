import { json } from '@sveltejs/kit';
import { PUBLIC_APP_ID, PUBLIC_IOS_TEAM } from '$env/static/public';

export const prerender = true;

export async function GET() {
	const data = {
		applinks: {
			details: [
				{
					appIDs: [`${PUBLIC_IOS_TEAM}.${PUBLIC_APP_ID}`],
					components: [
						{
							'/': '/auth-callback/*',
							comment: 'Matches any callback oauth URL for the Refs app'
						}
					]
				}
			]
		}
	};

	return json(data);
}
