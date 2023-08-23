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
	import { fade } from 'svelte/transition';

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
	<div class="stat w-36 bg-gray-300 dark:bg-gray-800">
		<div class="stat-title capitalize text-center h-fit">Commandes</div>
		<div class="flex justify-evenly">
			{#if $selectedSkills.length > 0}
				<button transition:fade on:click={() => selectedSkills.reset()} class="btn btn-xs btn-square">
					<FilterMinus width={15} />
				</button>
			{/if}
			{#if browser}
				<DarkModeBtn width={15} classes="btn btn-xs btn-square" />
			{/if}
		</div>
	</div>
</div>
