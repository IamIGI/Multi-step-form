<script lang="ts">
	import formDataStore from '$stores/formData';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let value: boolean = false;

	onMount(() => {
		const formData = get(formDataStore);
		const period = formData.form.plan.period;
		value = period === 'year';
	});

	const updatePeriod = () => {
		formDataStore.changePlanPeriod(value ? 'year' : 'month');
	};
</script>

<!-- Rounded switch -->
<label class="switch">
	<input type="checkbox" bind:checked={value} on:change={updatePeriod} />
	<span class="slider round" />
</label>

<style lang="scss">
	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 25px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-primary-marine-blue);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 18px;
		width: 18px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
