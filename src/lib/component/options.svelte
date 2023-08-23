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

<ul class="menu menu-vertical lg:menu-horizontal w-min lg:h-20 lg:items-center lg:py-1">
	{#if browser}
		<li>
			<DarkModeBtn width={20} />
		</li>
	{/if}
	{#if $selectedSkills.length > 0}
		<li class:animate-bounce={pulse}>
			<a transition:slide on:click|preventDefault={() => selectedSkills.reset()} href="/">
				<FilterMinus width={20} />
			</a>
		</li>
	{/if}
</ul>
