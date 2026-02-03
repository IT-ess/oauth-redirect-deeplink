<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { PUBLIC_DEEPLINK_SCHEME } from '$env/static/public';

	onMount(() => {
		openDeeplink();
	});
	const openDeeplink = () =>
		(window.location.href = `${PUBLIC_DEEPLINK_SCHEME}://auth-callback${page.url.search}`);
</script>

<div transition:fade class="flex min-h-screen flex-col items-center justify-center space-y-8">
	<h1 class="text-center text-4xl">Login successful</h1>
	<button class="bg-amber-400 text-2xl" onclick={openDeeplink}>Click here if not redirected</button>
</div>
