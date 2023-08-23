<script context="module" lang="ts">
	export interface IContactInfo {
		name: string;
		nationality: string;
		phone: string;
		email: string;
		blog: string;
	}
</script>

<script lang="ts">
	export let contactInfo: IContactInfo = {
		name: 'Mohammad-Amine Banaei',
		nationality: 'Nationalité Française',
		phone: '+33 6 61 93 90 82',
		email: 'mohammadamine.banaei@pm.me',
		blog: 'https://bnei.dev'
	};
</script>

<div class="flex w-full justify-around items-center">
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.name}
	</h4>
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.email}
	</h4>
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.phone}
	</h4>
	<h5 class="mx-2 mt-2 font-light text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.nationality}
	</h5>
	<a
		class="mx-2 mt-2 link font-light text-sm text-gray-800 dark:text-gray-200"
		href={contactInfo.blog}
	>
		{contactInfo.blog}
	</a>
	<img
		src="/bnei.dev_QR.png"
		alt="QR code to https://bnei.dev"
		class="w-16 h-16 place-self-end bg-white p-1"
	/>
</div>
