import type { ILang } from '$lib/component/langHobby.svelte';

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
