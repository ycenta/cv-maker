<script lang="ts">
	import Contact from '$lib/component/contact.svelte';
	import Education from '$lib/component/education.svelte';
	import Experience from '$lib/component/experience.svelte';
	import Skill from '$lib/component/skill.svelte';
	import Title from '$lib/component/title.svelte';
	import { experiences, selectedSkills } from '../store';

	export let data: import('./$types').PageData;

	$: experiences.set(data.experience);
</script>

<div class="py-4 dark:bg-neutraldark:bg-neutral-800 shadow-sm rounded-sm navbar">
	<Title {...data} />
	<Contact {...data} />
</div>
<div class="hero dark:bg-base-300 h-screen pt-1">
	<div class="text-center lg:text-left desktop-grid w-full h-full place-items-center gap-2">
		<!-- <div style="grid-area: picture;">
			<img src="/photo_cv.jpg" alt="Mohammad-Amine Banaei" class="mask mask-squircle w-32" />
		</div> -->
		<div class="col-span-2 my-2 self-start">
			<Skill {...data} />
		</div>
		<div class="px-6 self-start w-full">
			<Education {...data} />
		</div>
		<div class="pr-4 self-start w-full">
			<Experience experience={$experiences} />
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

			/* grid-template-areas:
				'education education experience experience experience'
				'education education experience experience experience'
				'education education experience experience experience'
				'education education experience experience experience'
				'education education experience experience experience'
				'education education langage langage hobby'; */
		}
	}
</style>
