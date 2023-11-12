<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import favicon from '$assets/images/favicon-32x32.png';
	import Legend from '$components/Legend.svelte';
</script>

<svelte:head>
	<title>Multi-Step-Form</title>
	<link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<div class="general-wrapper">
	<Legend />
	<slot />
</div>

<style lang="scss">
	.general-wrapper {
		border-radius: var(--border-radius-general);
		padding: 15px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
		background-color: var(--color-neutral-white);
	}
</style>
