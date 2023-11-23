import icon_advanced from '$assets/images/icon-advanced.svg';
import icon_arcade from '$assets/images/icon-arcade.svg';
import icon_pro from '$assets/images/icon-pro.svg';
import type { addOnsTitles, plan } from '$stores/formData';

export interface Card {
	icon: string;
	title: plan;
	cost: number;
}

export interface Adds {
	title: addOnsTitles;
	description: string;
	cost: number;
}

export const cards: Card[] = [
	{
		icon: icon_arcade,
		title: 'Arcade',
		cost: 9
	},
	{
		icon: icon_advanced,
		title: 'Advanced',
		cost: 12
	},
	{
		icon: icon_pro,
		title: 'Pro',
		cost: 15
	}
];

export const adds: Adds[] = [
	{
		title: 'Online service',
		description: 'Access to multiplayer games',
		cost: 1
	},
	{
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		cost: 2
	},
	{
		title: 'Customizable Profile',
		description: 'Custom theme on your profile',
		cost: 2
	}
];
