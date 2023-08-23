<script context="module" lang="ts">
	import { selectedSkills } from '../../store';
	import type { IBadge } from './ui/badge.svelte';

	export interface ISkill {
		name: string;
		category: 'devops' | 'backend' | 'frontend' | 'system' | 'science' | 'data' | 'other';
		color?: IBadge['color'];
	}
</script>

<script lang="ts">
	import DarkModeBtn from './darkModeBtn.svelte';
	import SkillBadge from './ui/skillBadge.svelte';
	import FilterMinus from './ui/svg/filterMinus.svelte';
	import { browser } from '$app/environment';
	import { fly, slide } from 'svelte/transition';

	export let skills: ISkill[] = [
		{
			name: 'golang',
			category: 'backend',
			color: 'red'
		}
	];

	const categories: ISkill['category'][] = ['devops', 'backend', 'frontend', 'system', 'data'];
</script>

<div class="stats shadow">
	{#each categories as category}
		<div class="stat w-36">
			<div class="stat-title capitalize text-center h-fit">{category}</div>
			{#each skills.filter((skill) => skill.category === category) as skill}
				<button on:click={() => selectedSkills.add(skill)} class="mb-1">
					<SkillBadge {skill} scale />
				</button>
			{/each}
		</div>
	{/each}
</div>

<div class="stats shadow lg:ml-2 mt-2 lg:mt-0">
	<div class="stat w-40 bg-gray-300 dark:bg-gray-800">
		<div class="stat-title capitalize text-center h-fit">Commandes</div>
		<div class="flex justify-around">
			{#if browser}
				<DarkModeBtn width={20} classes="btn btn-md btn-square justify-self-end" />
			{/if}
			{#if $selectedSkills.length > 0}
				<button
					transition:slide
					on:click={() => selectedSkills.reset()}
					class="btn btn-md btn-square justify-self-end"
				>
					<FilterMinus width={20} />
				</button>
			{/if}
		</div>
	</div>
</div>
