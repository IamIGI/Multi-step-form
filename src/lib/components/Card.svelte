<script lang="ts">
	import formDataStore, { type period, type plan } from '$stores/formData';

	export let icon: string;
	export let title: plan;
	export let cost: number;
	export let active: boolean;
	export let period: period;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-interactive-supports-focus -->
<div
	role="button"
	class="wrapper"
	class:isActive={active}
	on:click={() => formDataStore.changePlanType(title)}
>
	<img class="icon" alt="icon" src={icon} />
	<section>
		<h2>{title}</h2>
		<p>${period === 'year' ? cost * 10 : cost}/mo</p>
		{#if period === 'year'}
			<p class="year_paragraph">2 months free</p>
		{/if}
	</section>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid var(--color-neutral-cool-gray);
		width: 150px;
		height: 200px;
		cursor: pointer;

		&:hover {
			border: 2px solid var(--color-primary-purplish-blue);
			background-color: var(--color-neutral-alabaster);
		}

		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 5px;

			h2 {
				font-weight: 700;
				font-size: 20px;
				margin: 0px;
				color: var(--color-primary-marine-blue);
			}

			p {
				font-size: var(--font-size-p);
				font-weight: 500;
				margin: 0px;
				color: var(--color-neutral-cool-gray);
			}

			.year_paragraph {
				color: var(--color-primary-marine-blue);
			}
		}
	}

	.isActive {
		border: 2px solid var(--color-primary-purplish-blue);
		background-color: var(--color-neutral-alabaster);
	}
</style>
