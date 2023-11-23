import { derived } from 'svelte/store';
import formData from './formData';
import navigation from './navigation';

export const formIsNotFinish = derived([formData, navigation], ([$formData, $navigation]) => {
	if ($navigation === 3) {
		if (
			$formData.form.personalInfo.name &&
			$formData.form.personalInfo.name.length > 1 &&
			$formData.form.personalInfo.email &&
			$formData.form.personalInfo.email.length > 1 &&
			$formData.form.personalInfo.phone_number &&
			$formData.form.personalInfo.phone_number.length >= 9 &&
			$formData.form.plan.type
		) {
			return false;
		} else {
			return true;
		}
	}
	return false;
});
