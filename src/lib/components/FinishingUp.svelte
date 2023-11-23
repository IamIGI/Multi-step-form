<script lang="ts">
	import formDataStore from '$stores/formData';
	import { get } from 'svelte/store';
	import { adds, cards } from '../../data/data';
	import navigationStore, { Navigation } from '$stores/navigation';
	import Page from '../../routes/+page.svelte';

	const getPlanCost = () => {
		const formData = get(formDataStore);
		const cost = cards.find((card) => card.title === formData.form.plan.type);
		if (cost) {
			return formData.form.plan.period === 'month' ? cost.cost : cost.cost * 10;
		}
		return 0;
	};

	const getSummaryCost = () => {
		const planCost = getPlanCost();

		const formData = get(formDataStore);
		const monthOrYear = formData.form.plan.period;
		let addOnsCost = 0;
		if (monthOrYear === 'year') {
			addOnsCost += formData.form.addOns.onlineService ? adds[0].cost * 10 : 0;
			addOnsCost += formData.form.addOns.largerStorage ? adds[1].cost * 10 : 0;
			addOnsCost += formData.form.addOns.customizableProfile ? adds[2].cost * 10 : 0;
		} else {
			addOnsCost += formData.form.addOns.onlineService ? adds[0].cost : 0;
			addOnsCost += formData.form.addOns.largerStorage ? adds[1].cost : 0;
			addOnsCost += formData.form.addOns.customizableProfile ? adds[2].cost : 0;
		}
		return addOnsCost + planCost;
	};
</script>

<div class="wrapper">
	<div class="summary">
		<div class="item">
			<div class="left-wrapper">
				<h2>{$formDataStore.form.plan.type}({$formDataStore.form.plan.period})</h2>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p on:click={() => navigationStore.goTo(Navigation.SelectPlan)}>Change</p>
			</div>
			<p class="cost-paragraph">
				+${getPlanCost()}/{$formDataStore.form.plan.period === 'month' ? 'mo' : 'yr'}
			</p>
		</div>
		<div class="hr-line" />

		{#if $formDataStore.form.addOns.onlineService}
			<div class="item">
				<p>Online service</p>
				<p class="cost-paragraph">
					+${$formDataStore.form.plan.period === 'month'
						? adds[0].cost
						: adds[0].cost * 10}/{$formDataStore.form.plan.period === 'month' ? 'mo' : 'yr'}
				</p>
			</div>
		{/if}

		{#if $formDataStore.form.addOns.largerStorage}
			<div class="item">
				<p>Larger storage</p>
				<p class="cost-paragraph">
					+${$formDataStore.form.plan.period === 'month'
						? adds[1].cost
						: adds[1].cost * 10}/{$formDataStore.form.plan.period === 'month' ? 'mo' : 'yr'}
				</p>
			</div>
		{/if}

		{#if $formDataStore.form.addOns.customizableProfile}
			<div class="item">
				<p>Customizable profile</p>
				<p class="cost-paragraph">
					+${$formDataStore.form.plan.period === 'month'
						? adds[2].cost
						: adds[2].cost * 10}/{$formDataStore.form.plan.period === 'month' ? 'mo' : 'yr'}
				</p>
			</div>
		{/if}
	</div>

	<div class="item">
		<p>Total (per {$formDataStore.form.plan.period === 'month' ? 'month' : 'year'})</p>
		<p class="cost-paragraph total">
			${getSummaryCost()}/{$formDataStore.form.plan.period === 'month' ? 'mo' : 'yr'}
		</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		width: 100%;

		.summary {
			background-color: var(--color-neutral-magnolia);
			padding: 15px;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			gap: 15px;
			align-items: flex-start;
			width: 100%;
			margin-bottom: 20px;

			.hr-line {
				background-color: var(--color-neutral-cool-gray);
				width: 100%;
				height: 1px;
			}
		}

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			.left-wrapper {
				display: flex;
				flex-direction: column;
				gap: 5px;
				align-items: flex-start;

				h2 {
					color: var(--color-primary-marine-blue);
				}

				p {
					text-decoration: underline;
					cursor: pointer;
				}
			}

			.cost-paragraph {
				color: var(--color-primary-marine-blue);
			}

			.total {
				color: var(--color-primary-purplish-blue);
				font-weight: 700;
				font-size: 19px;
				padding-right: 20px;
			}
		}

		p,
		h2 {
			margin: 0;
		}

		p {
			color: var(--color-neutral-cool-gray);
			font-size: var(--font-size-p);
		}
	}
</style>
