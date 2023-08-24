<script>
	import Footer from '$lib/component/ui/footer.svelte';
	import '../app.css';
	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';
	import 'dayjs/locale/en';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	$: $page.url.pathname.includes('en') ? dayjs.locale('en') : dayjs.locale('fr');
</script>

{#key $page.url.pathname}
	<div class="min-h-screen dark:bg-base-300" in:fly>
		<slot />
	</div>
{/key}

<Footer />
