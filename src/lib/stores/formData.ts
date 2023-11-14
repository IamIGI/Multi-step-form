import { writable } from 'svelte/store';

type PersonalInfo = {
	name: string;
	email: string;
	phone_number: number;
};

type FormData = {
	trigger?: {
		personalInfo: boolean;
	};
	form: {
		personalInfo: PersonalInfo;
	};
};

const formDataStore = () => {
	const { subscribe, update } = writable<FormData>({
		trigger: { personalInfo: false },
		form: { personalInfo: { name: '', email: '', phone_number: 0 } }
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
