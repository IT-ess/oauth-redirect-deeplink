import { json } from '@sveltejs/kit';
import { PUBLIC_APP_ID, PUBLIC_SHA256_ANDROID_KEYSTORE } from '$env/static/public';

export const prerender = true;

export async function GET() {
	const data = [
		{
			relation: ['delegate_permission/common.handle_all_urls'],
			target: {
				namespace: 'android_app',
				package_name: PUBLIC_APP_ID,
				sha256_cert_fingerprints: [PUBLIC_SHA256_ANDROID_KEYSTORE]
			}
		}
	];

	return json(data);
}
