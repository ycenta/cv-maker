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
	import { throttle } from '@sveu/shared';

	import Worldmap from './ui/svg/worldmap.svelte';
	import { darkMode } from '../../store';
	import type { MouseEventHandler } from 'svelte/elements';

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

	const handleMouseMove: MouseEventHandler<HTMLDivElement> = throttle((e) => {
		const { offsetX, offsetY } = e;
		const { height, width } = e.currentTarget.getBoundingClientRect();
		const tX = Math.trunc((-offsetX + width / 2) / 2);
		const tY = Math.trunc((-offsetY + height / 2) / 2);
		e.currentTarget.style.transform = `matrix( 2, 0, 0, 2, ${tX}, ${tY})`;
	}, 0.1);

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

<div class="stats shadow w-full">
	<div class="stat p-0">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="stat-figure text-primary w-60 hidden absolute sm:grid transform-gpu transition overflow-y-hidden"
			on:mousemove={handleMouseMove}
			on:mouseleave={(e) => (e.currentTarget.style.transform = '')}
		>
			<Worldmap bind:worldMapSvg />
		</div>
		<div class="stats sm:w-min stats-vertical">
			{#each langs as lang}
				<div class="stat py-">
					<div class="stat-value text-lg capitalize">
						{lang.name}
						{#if lang.comment}
							<div class="stat-desc">
								{lang.comment}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
