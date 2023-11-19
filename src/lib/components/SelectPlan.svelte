<script lang="ts">
	import icon_advanced from '$assets/images/icon-advanced.svg';
	import icon_arcade from '$assets/images/icon-arcade.svg';
	import icon_pro from '$assets/images/icon-pro.svg';
	import Card from './Card.svelte';
	import Switcher from './Switcher.svelte';

	const cards = [
		{
			icon: icon_arcade,
			title: 'Arcade',
			cost: 9
		},
		{
			icon: icon_advanced,
			title: 'Advanced',
			cost: 12
		},
		{
			icon: icon_pro,
			title: 'Pro',
			cost: 15
		}
	];
</script>

<div class="wrapper">
	<main>
		{#each cards as card}
			<Card icon={card.icon} title={card.title} cost={card.cost} />
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
