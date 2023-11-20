<script lang="ts">
	import AddOns from './AddOns.svelte';
	import formDataStore, { type addOnsTitles } from '$stores/formData';

	interface Adds {
		title: addOnsTitles;
		description: string;
		cost: number;
	}

	const adds: Adds[] = [
		{
			title: 'Online service',
			description: 'Access to multiplayer games',
			cost: 1
		},
		{
			title: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			cost: 2
		},
		{
			title: 'Customizable Profile',
			description: 'Custom theme on your profile',
			cost: 2
		}
	];
</script>

<main>
	{#each adds as add}
		<AddOns
			title={add.title}
			description={add.description}
			cost={add.cost}
			active={$formDataStore.form.addOns[formDataStore.getAdd(add.title)]}
			period={$formDataStore.form.plan.period}
		/>
	{/each}
</main>

<style lang="scss">
	main {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 15px;
		align-items: center;
	}
</style>
