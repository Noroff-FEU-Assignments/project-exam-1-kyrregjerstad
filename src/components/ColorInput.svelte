<script lang="ts">
	export let label = "";
	export let value = "#000000";
</script>

<div>
	<input type="color" name={label} bind:value />
	<label for={label}>{label}</label>
</div>

<style>
	div {
		margin-block: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input {
		background-color: transparent;
		border: none;
	}
</style>
