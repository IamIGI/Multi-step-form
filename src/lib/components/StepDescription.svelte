<script lang="ts">
	import navigationStore from '$stores/navigation';

	const stepDescription = [
		{ title: 'Personal info', desc: 'Please provide your name, email address, and phone number.' },
		{ title: 'Select your plan', desc: 'You have the option of monthly or yearly billing.' },
		{ title: 'Pick add-ons', desc: 'Add-ons help enhance your gaming experience.' },
		{ title: 'Finishing up', desc: 'Double-check everything looks OK before confirming.' }
	];
</script>

<section>
	{#if $navigationStore <= 4}
		<h1>{stepDescription[$navigationStore - 1].title}</h1>
		<p>{stepDescription[$navigationStore - 1].desc}</p>
	{/if}
</section>

<style lang="scss">
	section {
		text-align: left;
		margin-bottom: 0px;
		h1 {
			margin: 0;
			margin-bottom: 10px;
			font-size: 30px;
			color: var(--color-primary-marine-blue);
		}

		p {
			font-size: var(--font-size-p);
			margin: 0;
			color: var(--color-neutral-cool-gray);
		}
	}
</style>
