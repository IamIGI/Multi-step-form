import { writable } from 'svelte/store';

export interface PersonalInfo {
	name: string | null;
	email: string | null;
	phone_number: string | null;
}

export interface FormData {
	trigger?: {
		personalInfo: boolean;
	};
	form: {
		personalInfo: PersonalInfo;
	};
}

const formDataStore = () => {
	const { subscribe, update } = writable<FormData>({
		trigger: { personalInfo: false },
		form: { personalInfo: { name: '', email: '', phone_number: '' } }
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

	return {
		subscribe,
		triggerPersonalInfoSave,
		updatePersonalInfo
	};
};

export default formDataStore();
