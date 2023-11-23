<script lang="ts">
	import AddOns from './AddOns.svelte';
	import formDataStore, { type addOnsTitles } from '$stores/formData';
	import { adds } from '../../data/data';
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
