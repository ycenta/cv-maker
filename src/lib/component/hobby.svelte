<script context="module" lang="ts">
	export interface IHobby {
		name: string;
		comment?: string;
		svg?: string;
	}
</script>

<script lang="ts">
	export let hobbies: IHobby[] = [
		{
			name: 'Boxe',
			comment: 'anglaise & thaïlandaise'
		}
	];
</script>

<div class="stats shadow w-full">
	{#each hobbies as hobby}
		<div class="stat">
			<div class="stat-value text-lg capitalize">
				{hobby.name}
			</div>
			<div class="stat-desc">
				{hobby.comment}
			</div>
		</div>
	{/each}
</div>
