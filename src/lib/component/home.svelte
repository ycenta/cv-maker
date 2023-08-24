<script lang="ts">
	import Contact, { type IContactInfo } from '$lib/component/contact.svelte';
	import Education, { type IEducation } from '$lib/component/education.svelte';
	import Experience, { type IExperience } from '$lib/component/experience.svelte';
	import Hobby, { type IHobby } from '$lib/component/hobby.svelte';
	import Lang, { type ILang } from '$lib/component/lang.svelte';
	import Options from '$lib/component/options.svelte';
	import Skill, { type ISkill } from '$lib/component/skill.svelte';
	import Title, { type ITitle } from '$lib/component/title.svelte';
	import { experiences, snapshotMode } from '../../store';

	export let experience: IExperience[];
	export let education: IEducation[];
	export let langs: ILang[];
	export let hobbies: IHobby[];
	export let title: ITitle;
	export let contactInfo: IContactInfo;
	export let skills: ISkill[];

	$: experiences.set(experience);
</script>

<div class="py-0 dark:bg-base-100 shadow-sm rounded-sm navbar">
	<Title {title} />
	<div class="flex flex-col sm:flex-row w-full">
		<Contact {contactInfo} />
		{#if !$snapshotMode}
			<div class="self-end">
				<Options />
			</div>
			{/if}
	</div>
</div>
<div class="hero grow pt-1 pb-2">
	<div class="text-center lg:text-left desktop-grid w-screen h-full place-items-center gap-2">
		<!-- <div style="grid-area: picture;">
			<img src="/photo_cv.jpg" alt="Mohammad-Amine Banaei" class="mask mask-squircle w-32" />
		</div> -->
		<div class="my-2 flex justify-center self-start w-full" style="grid-area: skill;">
			<Skill {skills} />
		</div>
		<div class="px-2 self-start w-full" style="grid-area: experience;">
			<Experience experience={$experiences} />
		</div>
		<div class="divider sm:hidden mx-2 my-1"></div>
		<div class="px-2 self-start w-full" style="grid-area: education;">
			<Education {education} />
			<div class="divider my-1"></div>
			<Lang {langs} />
			<div class="divider my-1"></div>
			<Hobby {hobbies} />
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
