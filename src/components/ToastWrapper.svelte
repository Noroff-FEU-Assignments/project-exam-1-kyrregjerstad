<script lang="ts">
	import Toast from "$components/Toast.svelte";
	import { dismissToast, toasts, addToast } from "$lib/stores/notifications";
	import { fly } from "svelte/transition";
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<div transition:fly={{ duration: 500, y: -200 }}>
				<Toast
					type={toast.type}
					dismissible={toast.dismissible}
					on:dismiss={() => dismissToast(toast.id)}
				>
					<span slot="title">
						{toast.title}
					</span>
					<span slot="body">
						{toast.message}
					</span>
				</Toast>
			</div>
		{/each}
	</section>
{/if}

<style>
	section {
		position: relative;
		z-index: var(--z-index-toast);
	}
</style>
