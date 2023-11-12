import { writable } from 'svelte/store';

const navigationStore = () => {
	const { subscribe, update } = writable<number>(1);

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

	return {
		subscribe,
		goBack,
		goNext
	};
};

export default navigationStore();
