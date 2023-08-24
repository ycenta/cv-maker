// Filename : langHobbies.ts
import type { IHobby } from '$lib/component/hobby.svelte';
import type { ILang } from '$lib/component/lang.svelte';

export const langs: ILang[] = [
	{
		name: 'French',
		codes: ['be', 'ca', 'fr'],
		comment: 'native language'
	},
	{
		name: 'English',
		codes: ['us', 'uk', 'gb', 'au'],
		comment: 'bilingual'
	},
	{
		name: 'Persian',
		codes: ['ir'],
		comment: 'spoken'
	}
];

export const hobbies: IHobby[] = [
	{
		name: 'boxing',
		comment: 'English & Thai',
		svg: '/boxing-glove.svg'
	},
	{
		name: 'reading',
		comment: 'Weber, Maupassant',
		svg: '/reading.svg'
	}
];
