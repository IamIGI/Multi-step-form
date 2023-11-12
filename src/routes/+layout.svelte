<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import favicon from '$assets/images/favicon-32x32.png';
	import Legend from '$components/Legend.svelte';
	import navigationStore from '$stores/navigation';
</script>

<svelte:head>
	<title>Multi-Step-Form</title>
	<link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<div class="general-wrapper">
	<Legend />
	<div class="step-container">
		<slot />
		<div class="buttons-wrapper">
			<button class="back-button" on:click={navigationStore.goBack}> Go Back </button>
			<button class="next-button" on:click={navigationStore.goNext}> Next Step </button>
		</div>
	</div>
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

	.step-container {
		width: 600px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		padding: 7% 12%;

		.buttons-wrapper {
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;

			button {
				cursor: pointer;
			}

			.next-button {
				padding: 13px;
				background-color: var(--color-primary-marine-blue);
				font-size: 14px;
				color: var(--color-neutral-white);
				border-radius: 8px;
				border: none;

				&:hover {
					background-color: hsl(213, 93%, 28%);
				}
			}

			.back-button {
				padding: 13px;
				background-color: var(--color-neutral-white);
				font-size: 14px;
				color: var(--color-neutral-cool-gray);
				border-radius: 8px;
				border: none;
				font-weight: 500;

				&:hover {
					color: black;
				}
			}
		}
	}
</style>
