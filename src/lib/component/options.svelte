<script>
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { selectedSkills } from '../../store';
	import FilterMinus from './ui/svg/filterMinus.svelte';
	import DarkModeBtn from './darkModeBtn.svelte';
	import { page } from '$app/stores';
	import Fr from './ui/svg/fr.svelte';
	import Uk from './ui/svg/uk.svelte';

	let pulseCount = 0;
	let pulse = false;

	$: if (reset && $selectedSkills.length > 0 && pulseCount < 2) {
		reset = false;
		pulseCount++;
		pulse = true;
		setTimeout(() => {
			pulse = false;
		}, 3000);
	}

	let reset = true;

	$: if ($selectedSkills.length === 0) reset = true;
</script>

<div class="sm:w-28 sm:h-24">
	<ul
		class="menu sm:menu-vertical menu-horizontal flex-row-reverse sm:justify-center sm:w-min h-full flex-wrap sm:py-1"
	>
		{#if browser}
			<li>
				<DarkModeBtn width={22} />
			</li>
		{/if}
		<li>
			<a href={$page.url.pathname.includes('en') ? '/' : '/en'}>
				{#if $page.url.pathname.includes('en')}
					<Fr width={22} />
				{:else}
					<Uk width={22} />
				{/if}
			</a>
		</li>
		{#if $selectedSkills.length > 0}
			<li class:animate-bounce={pulse}>
				<a
					transition:slide
					on:click|preventDefault={() => selectedSkills.reset()}
					href="/"
					class="p-2"
				>
					<FilterMinus width={22} />
				</a>
			</li>
		{/if}
	</ul>
</div>
