<script lang="ts">
	import Contact from '$lib/component/contact.svelte';
	import Education from '$lib/component/education.svelte';
	import Experience from '$lib/component/experience.svelte';
	import Hobby from '$lib/component/hobby.svelte';
	import Lang from '$lib/component/lang.svelte';
	import Options from '$lib/component/options.svelte';
	import HeadTags from '$lib/component/seo/HeadTags.svelte';
	import Skill from '$lib/component/skill.svelte';
	import Title from '$lib/component/title.svelte';
	import type { IMetaTagProperties } from '$lib/seo';
	import { experiences, selectedSkills } from '../store';

	export let data: import('./$types').PageData;

	$: experiences.set(data.experience);

	let metaData: Partial<IMetaTagProperties> = {
		title: 'CV - ' + data.contactInfo.name,
		description:
			'Bienvenue sur mon CV en ligne. Vous trouverez ici toutes les informations concernant mes expériences, compétences, formations et coordonnées. N’hésitez pas à me contacter pour toute proposition ou pour plus d’informations.',
		url: `https://cv.bnei.dev`,
		logoUrl: 'https://cv.bnei.dev/favicon-32x32.png',
		keywords: ['CV', data.contactInfo.name, ...data.skills.map((skill) => skill.name)],
		searchUrl: `https://cv.bnei.dev`,
		image: 'https://cv.bnei.dev/android-chrome-192x192.png',
		sitemapUrl: 'https://cv.bnei.dev/sitemap.xml'
	};
</script>

<HeadTags {metaData} />

<div class="py-0 dark:bg-base-100 shadow-sm rounded-sm navbar">
	<Title {...data} />
	<div class="flex flex-col lg:flex-row w-full items-end">
		<Contact {...data} />
		<Options />
	</div>
</div>
<div class="hero grow pt-1">
	<div class="text-center lg:text-left desktop-grid w-screen h-full place-items-center gap-2">
		<!-- <div style="grid-area: picture;">
			<img src="/photo_cv.jpg" alt="Mohammad-Amine Banaei" class="mask mask-squircle w-32" />
		</div> -->
		<div class="my-2 flex justify-center self-start w-full" style="grid-area: skill;">
			<Skill {...data} />
		</div>
		<div class="px-2 self-start w-full" style="grid-area: experience;">
			<Experience experience={$experiences} />
		</div>
		<div class="divider lg:hidden"></div>
		<div class="px-2 self-start w-full" style="grid-area: education;">
			<Education {...data} />
			<div class="divider"></div>
			<Lang {...data} />
			<div class="divider"></div>
			<Hobby {...data} />
			<div class="mb-4 lg:mb-0"></div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 1024px) {
		.desktop-grid {
			display: grid;
			grid-template-columns: 30% auto;
			grid-template-rows: min-content auto;
			grid-column-gap: 0px;
			grid-row-gap: 0px;

			grid-template-areas:
				'skill skill'
				'education experience';
		}
	}
</style>
