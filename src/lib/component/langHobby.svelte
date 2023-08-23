<script context="module" lang="ts">
	export interface ILang {
		name: string;
		codes: string[];
		comment?: string;
	}

	export interface IHobby {
		name: string;
		comment?: string;
	}
</script>

<script lang="ts">
	import { tick } from 'svelte';

	export let langs: ILang[] = [
		{
			name: 'français',
			codes: ['be', 'ca', 'fr'],
			comment: 'Langue maternelle'
		}
	];

	let world: HTMLEmbedElement;

	$: if (world) {
		tick().then(() => {
			const doc = world.getSVGDocument();
			if (doc)
				langs
					.flatMap(({ codes }) => codes)
					.map((c) => {
						const country = doc.querySelector(`[cc=${c}]`);
						if (country) {
							(country as any).style.fill = 'gray';
						}
					});
		});
	}
</script>

<div class="stats shadow">
	<div class="stat p-0">
		<div class="stat-figure text-primary w-52">
			<embed src="/worldmap.svg" bind:this={world} type="image/svg+xml" />
		</div>
		<!-- <div class="stat-title capitalize text-center h-fit">Langues</div> -->
		<div class="p-2">
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
