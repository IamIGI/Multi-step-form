<script lang="ts">
	import { Acknowledgments, FinishingUp, PersonalInfo, PickAdd, SelectPlan } from '$components';
	import navigationStore from '$stores/navigation';
</script>

{#if $navigationStore === 1}
	<PersonalInfo />
{:else if $navigationStore === 2}
	<SelectPlan />
{:else if $navigationStore === 3}
	<PickAdd />
{:else if $navigationStore === 4}
	<FinishingUp />
{:else if $navigationStore === 5}
	<Acknowledgments />
{/if}
