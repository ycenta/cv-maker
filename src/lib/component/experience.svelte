<script context="module" lang="ts">
	import Badge from './ui/badge.svelte';
	import { formatDate } from '$lib/utils';

	export interface IExperience {
		enterprise: string;
		position: string;
		startDate: Date;
		endDate: Date;
		description: string;
		missions: {
			skills: ISkill[];
			description: string;
			title: string;
		}[];
	}
</script>

<script lang="ts">
	import Detail from './ui/svg/detail.svelte';
	import type { ISkill } from './skill.svelte';
	import SkillBadge from './ui/skillBadge.svelte';
	import { fly } from 'svelte/transition';

	export let experience: IExperience[] = [
		{
			enterprise: 'Netapsys Lyon',
			position: 'Développeur web - Stage',
			description: `Lors d'un stage de fin de DUT chez Netapsys Lyon, un prestataire de services informatiques, j'ai eu l'occasion de mettre en pratique mes compétences en développement logiciel.`,
			startDate: new Date('2015-04-01'),
			endDate: new Date('2015-07-01'),
			missions: [
				{
					skills: [
						{ name: 'C++', category: 'backend' },
						{ name: 'QT', category: 'other' }
					],
					description: `Au sein de Netapsys Lyon, j'ai participé au développement d'une application multiplateforme pour notre client Haulotte, une entreprise renommée dans la fabrication de chariots élévateurs. En collaboration avec une équipe de développeurs, j'ai contribué à la mise à jour de l'application de diagnostic, HaulotteDiag, en veillant à optimiser sa compatibilité avec l'ensemble des véhicules de la gamme de l'entreprise.`,
					title: `HaulotteDiag`
				}
			]
		}
	];
</script>

<div class="lg:columns-2">
	<ol class="relative border-l-2 border-lime-200 dark:border-green-700">
		{#each experience.sort((a, b) => b.endDate.getTime() - a.endDate.getTime()) as item, i}
			<li class="ml-4 {i !== 0 ? 'mt-2' : ''} break-inside-avoid" transition:fly>
				<div
					class="absolute w-3 h-3 bg-gray-200 rounded-full mt-8 -left-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"
				></div>
				<div
					class="card dark:bg-neutral-800 shadow-lg rounded-sm hover:scale-[1.025] transition hover:cursor-pointer"
					on:click|stopPropagation={() =>
						document.getElementById(`${item.enterprise}-modal`)?.click()}
					on:keyup={(k) =>
						k.key === 'Enter' && document.getElementById(`${item.enterprise}-modal`)?.click()}
					aria-controls="show details"
					role="button"
					tabindex="0"
				>
					<div class="card-body py-4">
						<div class="flex items-end">
							<time class="mb-1 text-sm font-normal text-accent w-56">
								{formatDate(item.startDate)} - {formatDate(item.endDate)}
							</time>
							<h3 class="font-bold text-xl capitalize card-title">
								{item.enterprise} - {item.position}
							</h3>
						</div>
						<div class="flex gap-2 items-center">
							<p class="text-sm font-normal">
								{item.description}
							</p>
							<!-- <div class="flex flex-wrap">
							{#each item.missions.map(({ skills }) => skills).reduce(reduceSkills, []) as skill}
							<Badge content={skill.content} color={skill.color} />
							{/each}
						</div> -->
							<div class="tooltip tooltip-left" data-tip="Détails de la mission">
								<button
									class="btn btn-sm btn-outline"
									id="{item.enterprise}-modal"
									on:click={() => document.getElementById(item.enterprise)?.showModal()}
									><Detail width={20} /></button
								>
							</div>
						</div>
					</div>
				</div>
			</li>
			<dialog id={item.enterprise} class="modal modal-bottom sm:modal-middle">
				<form method="dialog" class="modal-box">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<h3 class="font-bold text-lg text-center">Missions : {item.enterprise}</h3>
					<ul class="ml-4 mt-4">
						{#each item.missions || [] as mission, i}
							{#if i !== 0}
								<div class="divider"></div>
							{/if}
							<li class="mb-2">
								<h4 class="font-semibold mr-2">{mission.title}</h4>

								<p class="mb-2 text-sm font-normal">{mission.description}</p>
								<div class="flex flex-wrap gap-2">
									{#each mission.skills || [] as skill}
										<SkillBadge {skill} />
									{/each}
								</div>
							</li>
						{/each}
					</ul>
				</form>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		{/each}
	</ol>
</div>
