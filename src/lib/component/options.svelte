<script>
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { selectedSkills } from '../../store';
	import FilterMinus from './ui/svg/filterMinus.svelte';
	import DarkModeBtn from './darkModeBtn.svelte';

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

<ul class="menu lg:menu-vertical menu-horizontal flex-row-reverse lg:w-min lg:h-24 lg:justify-center lg:py-1">
	{#if browser}
		<li>
			<DarkModeBtn width={22} />
		</li>
	{/if}
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
