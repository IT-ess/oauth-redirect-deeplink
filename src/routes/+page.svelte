<script lang="ts">
	import matrix from '$lib/assets/matrix.png';
	import svelte from '$lib/assets/svelte.png';
	import tauri from '$lib/assets/tauri.webp';
</script>

<main class="flex h-screen w-screen items-center">
	<div class="flex w-full flex-col items-center">
		<a
			href="https://github.com/IT-ess/tauri-plugin-matrix-svelte"
			class="text-6xl text-blue-600 underline">Matrix Svelte Client</a
		>
		<div class="m-auto flex w-full items-center justify-center gap-4 overflow-hidden p-4 text-4xl">
			<img src={matrix} alt="matrix" class="size-20 object-contain" />
			+
			<img src={tauri} alt="tauri" class="size-20 object-contain" />
			+
			<img src={svelte} alt="svelte" class="size-20 object-contain" />
		</div>
	</div>
</main>
