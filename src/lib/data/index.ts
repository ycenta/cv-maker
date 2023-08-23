import type { IContactInfo } from '$lib/component/contact.svelte';
import type { ISkill } from '$lib/component/skill.svelte';
import type { ITitle } from '$lib/component/title.svelte';
import { education } from './education';
import { experience } from './experiences';
import { langs } from './lang';

export { experience, education, langs };

export const title: ITitle = {
	jobDesc: 'Ingénieur Web'
};

export const contactInfo: IContactInfo = {
	name: 'Mohammad-Amine BANAEI',
	nationality: 'Nationalité Française',
	phone: '+33 6 61 93 90 82',
	email: 'mohammadamine.banaei@pm.me',
	blog: 'https://bnei.dev'
};

export const skills: ISkill[] = [
	{
		name: 'golang',
		category: 'backend'
	},
	{
		name: 'nodejs',
		category: 'backend'
	},
	{
		name: 'reactjs',
		category: 'frontend'
	},
	{
		name: 'sveltekit',
		category: 'frontend'
	},
	{
		name: 'sql',
		category: 'data'
	},
	{
		name: 'mongodb',
		category: 'data'
	},
	{
		name: 'kubernetes',
		category: 'devops'
	},
	{
		name: 'docker',
		category: 'devops'
	},
	{
		name: 'linux',
		category: 'system'
	}
];
