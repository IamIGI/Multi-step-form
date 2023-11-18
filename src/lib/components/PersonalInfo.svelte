<script lang="ts">
	import formDataStore from '$stores/formData';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import type { PersonalInfo } from '$stores/formData';

	let nameValue: string = '';
	let emailValue: string = '';
	let phoneValue: string = '';

	$: phoneValue = phoneValue.replace(/[^0-9]/g, '');

	formDataStore.subscribe((curr) => {
		if (curr.trigger?.personalInfo) {
			formDataStore.updatePersonalInfo({
				name: nameValue,
				email: emailValue,
				phone_number: phoneValue
			});
		}
	});

	function getPersonalInfo(): PersonalInfo {
		const formData = get(formDataStore);
		return formData.form.personalInfo;
	}

	onMount(() => {
		const personalInfo = getPersonalInfo();

		nameValue = personalInfo.name ?? '';
		emailValue = personalInfo.email ?? '';
		phoneValue = personalInfo.phone_number ?? '';
	});
</script>

<div class="wrapper">
	<form>
		<label for="name">Name</label>
		<input type="text" name="name" placeholder="  e.g. Stephen King" bind:value={nameValue} />
		<label for="Email">Email Address</label>
		<input
			type="email"
			name="email"
			placeholder="e.g. stephenking@lorem.com"
			bind:value={emailValue}
		/>
		<label for="phone">Phone Number</label>
		<input type="phone" name="phone" placeholder="e.g. +1 234 567 890" bind:value={phoneValue} />
	</form>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 5px;
		color: var(--color-primary-marine-blue);
		font-weight: 500;

		label {
			font-size: 15px;
		}

		input {
			font-weight: 500;
			color: var(--color-primary-marine-blue);
			width: 100%;
			padding: 14px;
			padding-left: 15px;
			border-radius: 8px;
			border: 1px solid var(--color-neutral-cool-gray);
			cursor: pointer;
			font-size: var(--font-size-p);
			margin-bottom: 25px;

			&:hover {
				border-color: var(--color-primary-marine-blue);
			}
		}

		.input-error {
			border-color: var(--color-primary-strawberry-red);
		}
	}
</style>
