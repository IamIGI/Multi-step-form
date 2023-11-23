<script lang="ts">
	import Card from './Card.svelte';
	import Switcher from './Switcher.svelte';
	import formDataStore, { type plan } from '$stores/formData';
	import { cards } from '../../data/data';
</script>

<div class="wrapper">
	<main>
		{#each cards as card}
			<Card
				icon={card.icon}
				title={card.title}
				cost={card.cost}
				active={card.title === $formDataStore.form.plan.type}
				period={$formDataStore.form.plan.period}
			/>
		{/each}
	</main>
	<section>
		<p>Monthly</p>
		<Switcher />
		<p>Yearly</p>
	</section>
</div>

<style lang="scss">
	.wrapper {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 30px;
		align-items: center;

		main {
			display: flex;
			gap: 15px;
			justify-content: center;
			align-items: center;
		}

		section {
			width: 100%;
			height: 40px;
			background-color: var(--color-neutral-alabaster);
			border-radius: 10px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 20px;

			p {
				margin: 0px;
				color: gray;
				font-weight: 500;
			}
		}
	}
</style>
