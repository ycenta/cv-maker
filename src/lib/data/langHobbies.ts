import type { IHobby } from '$lib/component/hobby.svelte';
import type { ILang } from '$lib/component/lang.svelte';

export const langs: ILang[] = [
	{
		name: 'français',
		codes: ['be', 'ca', 'fr'],
		comment: 'Langue maternelle'
	},
	{
		name: 'anglais',
		codes: ['us', 'uk', 'gb', 'au'],
		comment: 'bilingue'
	},
	{
		name: 'persian',
		codes: ['ir'],
		comment: 'parlé'
	}
];

export const hobbies: IHobby[] = [
	{
		name: 'boxe',
		comment: 'anglaise & thaïlandaise'
	},
	{
		name: 'lecture',
		comment: 'Weber, Maupassant'
	}
];
