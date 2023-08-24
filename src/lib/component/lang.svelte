<script context="module" lang="ts">
	export interface ILang {
		name: string;
		codes: string[];
		comment?: string;
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	import Worldmap from './ui/svg/worldmap.svelte';
	import { darkMode } from '../../store';

	export let langs: ILang[] = [
		{
			name: 'français',
			codes: ['be', 'ca', 'fr'],
			comment: 'Langue maternelle'
		}
	];

	let worldMapSvg: SVGElement;

	$: if (worldMapSvg) {
		worldMapSvg.setAttribute('fill', $darkMode ? 'gray' : '#262626');
	}

	$: if (browser) {
		tick().then(() => {
			langs
				.flatMap(({ codes }) => codes)
				.map((code) => {
					const path = document.getElementById(code);
					if (path) {
						path.style.fill = $darkMode ? 'white' : '#A6A6A6';
					}
				});
		});
	}
</script>

<div class="stats shadow w-full stats-vertical lg:stats-horizontal">
	<div class="stat p-0">
		<div class="stat-figure text-primary w-60 hidden sm:grid hover:scale-150 transition transform-gpu overflow-hidden">
			<!-- <embed src="/worldmap.svg" bind:this={world}  /> -->
			<Worldmap bind:worldMapSvg />
		</div>
		<!-- <div class="stat-title capitalize text-center h-fit">Langues</div> -->
		<div class="p-4">
			{#each langs as lang}
				<div class="stat-value text-lg capitalize">
					{lang.name}
					{#if lang.comment}
						<div class="stat-desc">
							{lang.comment}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
