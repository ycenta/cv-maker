<script>
	import Footer from '$lib/component/ui/footer.svelte';
	import '../app.css';
	import dayjs from 'dayjs';
	import 'dayjs/locale/fr';

	dayjs.locale('fr');
</script>

<div class="min-h-screen dark:bg-base-300">
	<slot />
</div>

<Footer />
