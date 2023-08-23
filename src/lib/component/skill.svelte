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
	import SkillBadge from './ui/skillBadge.svelte';
	
	export let skills: ISkill[] = [
		{
			name: 'golang',
			category: 'backend',
			color: 'red'
		}
	];

	const categories: ISkill['category'][] = ['devops', 'backend', 'frontend', 'system', 'data'];
</script>

<div class="stats shadow stats-vertical lg:stats-horizontal h-fit">
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
