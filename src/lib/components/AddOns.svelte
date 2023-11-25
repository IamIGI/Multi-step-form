<script lang="ts">
	import formDataStore, { type addOnsTitles, type period } from '$stores/formData';

	export let title: addOnsTitles;
	export let description: string;
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
	on:click={() => formDataStore.changeAddOns(title, !active)}
>
	<div class="left-wrapper">
		<input type="checkbox" bind:checked={active} />
		<div class="text-wrapper">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</div>
	<p>+${period === 'year' ? cost * 10 : cost}/{period === 'year' ? 'yr' : 'mo'}</p>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 90px;
		border-radius: 10px;
		border: 1px solid var(--color-neutral-cool-gray);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		cursor: pointer;

		input {
			accent-color: var(--color-primary-purplish-blue);

			height: 20px;
			width: 20px;
		}

		.left-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 20px;
		}

		.text-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			text-align: left;

			h2 {
				font-weight: 700;
				margin: 0px;
				color: var(--color-primary-marine-blue);
				font-size: 20px;
			}

			p {
				margin: 0px;
				font-weight: 500;
				font-size: var(--font-size-p);
				color: var(--color-neutral-cool-gray);
			}

			@media screen and (max-width: 700px) {
				h2 {
					font-size: 18px;
				}

				p {
					font-size: calc(var(--font-size-p) - 3px);
				}
			}
		}

		&:hover {
			border: 1px solid var(--color-primary-purplish-blue);
			background-color: var(--color-neutral-alabaster);
		}
	}

	p {
		margin: 0px;
		font-weight: 500;
		font-size: var(--font-size-p);
		color: var(--color-primary-purplish-blue);
	}

	.isActive {
		border: 1px solid var(--color-primary-purplish-blue);
		background-color: var(--color-neutral-alabaster);
	}
</style>
