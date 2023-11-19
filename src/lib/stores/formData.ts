import { writable } from 'svelte/store';

export interface PersonalInfo {
	name: string | null;
	email: string | null;
	phone_number: string | null;
}

export type plan = 'Arcade' | 'Pro' | 'Advanced' | null;
export type period = 'month' | 'year';

export interface FormData {
	trigger?: {
		personalInfo: boolean;
	};
	form: {
		personalInfo: PersonalInfo;
		plan: { type: plan; period: period };
	};
}

const formDataStore = () => {
	const { subscribe, update } = writable<FormData>({
		trigger: { personalInfo: false },
		form: {
			personalInfo: { name: '', email: '', phone_number: '' },
			plan: { type: null, period: 'year' }
		}
	});

	const triggerPersonalInfoSave = () => {
		update((prev) => {
			return { ...prev, trigger: { ...prev.trigger, personalInfo: true } };
		});
	};

	const updatePersonalInfo = (value: PersonalInfo) => {
		update((prev) => {
			return {
				form: { ...prev.form, personalInfo: value },
				trigger: { ...prev.trigger, personalInfo: false }
			};
		});
	};

	const changePlanType = (value: plan) => {
		update((prev) => {
			return {
				...prev,
				form: { ...prev.form, plan: { ...prev.form.plan, type: value } }
			};
		});
	};

	const changePlanPeriod = (value: period) => {
		update((prev) => {
			return {
				...prev,
				form: { ...prev.form, plan: { ...prev.form.plan, period: value } }
			};
		});
	};

	return {
		subscribe,
		triggerPersonalInfoSave,
		updatePersonalInfo,
		changePlanType,
		changePlanPeriod
	};
};

export default formDataStore();
