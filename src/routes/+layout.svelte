<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import favicon from '$assets/images/favicon-32x32.png';
	import Legend from '$components/Legend.svelte';
	import navigationStore from '$stores/navigation';
	import formDataStore from '$stores/formData';
	import StepDescription from '$components/StepDescription.svelte';
	import { formIsNotFinish } from '$stores/formIsFinish';

	const navigateNext = () => {
		navigationStore.goNext();
		formDataStore.triggerPersonalInfoSave();
	};
</script>

<svelte:head>
	<title>Multi-Step-Form</title>
	<link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<div class="general-wrapper">
	<Legend />
	<div class="step-container">
		<StepDescription />
		<slot />
		<div class="buttons-wrapper">
			{#if $navigationStore !== 5}
				{#if $navigationStore !== 1}
					<button class="back-button" on:click={navigationStore.goBack}> Go Back </button>
				{/if}
				{#if $navigationStore !== 4}
					<button class="next-button" on:click={navigateNext} disabled={$formIsNotFinish}>
						Next Step
					</button>
				{:else}
					<button type="submit" class="confirm-button" on:click={navigationStore.goNext}>
						Confirm
					</button>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.general-wrapper {
		height: 100%;
		border-radius: var(--border-radius-general);
		padding: 15px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		background-color: var(--color-neutral-white);
	}

	.step-container {
		height: 566px;
		width: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 20px;
		padding: 4% 7% 2% 7%;

		.buttons-wrapper {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			width: 100%;
			align-items: center;

			button {
				cursor: pointer;
			}

			.next-button {
				order: -1;
				padding: 13px 15px;
				background-color: var(--color-primary-marine-blue);
				font-size: 14px;
				color: var(--color-neutral-white);
				border-radius: 8px;
				border: none;

				&:disabled {
					background-color: gray;
					cursor: auto;

					&:hover {
						background-color: gray;
					}
				}

				&:hover {
					background-color: hsl(213, 93%, 28%);
				}
			}

			.confirm-button {
				order: -1;
				padding: 13px;
				background-color: var(--color-primary-purplish-blue);
				font-size: 14px;
				color: var(--color-neutral-white);
				border-radius: 8px;
				border: none;

				&:hover {
					background-color: hsl(243, 98%, 67%);
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
