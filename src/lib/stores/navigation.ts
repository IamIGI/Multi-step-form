import { writable } from 'svelte/store';

export enum Navigation {
	YourInfo = 1,
	SelectPlan,
	AddOns,
	Summary
}

const navigationStore = () => {
	const { subscribe, update, set } = writable<number>(1);

	const goBack = () => {
		update((n) => {
			const result = n - 1;
			if (result < 1) return 1;
			return result;
		});
	};

	const goNext = () => {
		update((n) => {
			const result = n + 1;
			if (result > 5) return 5;
			return result;
		});
	};

	const goTo = (value: Navigation) => {
		set(value);
	};

	return {
		subscribe,
		goBack,
		goNext,
		goTo
	};
};

export default navigationStore();
