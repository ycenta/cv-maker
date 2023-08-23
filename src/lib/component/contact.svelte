<script context="module" lang="ts">
	export interface IContactInfo {
		name: string;
		nationality: string;
		phone: string;
		email: string;
		links: {
			name?: string;
			url: string;
			type: 'linkedin' | 'github' | 'other';
		}[];
	}
</script>

<script lang="ts">
	import BrandLogo from "./ui/brandLogo.svelte";

	export let contactInfo: IContactInfo = {
		name: 'Mohammad-Amine Banaei',
		nationality: 'Nationalité Française',
		phone: '+33 6 61 93 90 82',
		email: 'mohammadamine.banaei@pm.me',
		links: [
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/mohammadbnei',
				type: 'linkedin'
			}
		]
	};
</script>

<div class="flex flex-col lg:flex-row w-full justify-around items-center">
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.name}
	</h4>
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		<a href="mailto:{contactInfo.email}">
			{contactInfo.email}
		</a>
	</h4>
	<h4 class="mx-2 mt-2 font-medium text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.phone}
	</h4>
	<h5 class="mx-2 mt-2 font-light text-sm text-gray-800 dark:text-gray-200">
		{contactInfo.nationality}
	</h5>
	<div class="flex flex-col items-start mx-2 mt-2">
		{#each contactInfo.links as link}
			<!-- content here -->
			<a class="flex items-center gap-1 link font-light text-sm text-gray-800 dark:text-gray-200" href={link.url}>
				<BrandLogo width={15}  type={link.type} />
				{link.name || link.url}
			</a>
		{/each}
	</div>
</div>
