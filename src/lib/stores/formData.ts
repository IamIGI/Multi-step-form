import { writable } from 'svelte/store';

export type addOnsTitles = 'Online service' | 'Larger storage' | 'Customizable Profile';
export type addOnsTypes = 'onlineService' | 'largerStorage' | 'customizableProfile';
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
		addOns: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean };
	};
}

const formDataStore = () => {
	const { subscribe, update } = writable<FormData>({
		trigger: { personalInfo: false },
		form: {
			personalInfo: { name: '', email: '', phone_number: '' },
			plan: { type: null, period: 'year' },
			addOns: { onlineService: false, largerStorage: false, customizableProfile: false }
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

	const getAdd = (value: addOnsTitles): addOnsTypes => {
		switch (value) {
			case 'Online service':
				return 'onlineService';
			case 'Larger storage':
				return 'largerStorage';
			case 'Customizable Profile':
				return 'customizableProfile';
			default:
				return 'onlineService';
		}
	};

	const changeAddOns = (key: addOnsTitles, value: boolean) => {
		update((prev) => {
			return {
				...prev,
				form: { ...prev.form, addOns: { ...prev.form.addOns, [getAdd(key)]: value } }
			};
		});
	};

	return {
		subscribe,
		triggerPersonalInfoSave,
		updatePersonalInfo,
		changePlanType,
		changePlanPeriod,
		changeAddOns,
		getAdd
	};
};

export default formDataStore();
