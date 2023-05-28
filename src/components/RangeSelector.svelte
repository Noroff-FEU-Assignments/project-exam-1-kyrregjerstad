<script lang="ts">
	export let label = "";
	export let value = 1;
	export let min = 0.5;
	export let max = 1.5;
</script>

<div>
	<input
		id="textMultiplier"
		name="textMultiplier"
		type="range"
		{min}
		{max}
		step="0.01"
		bind:value
	/>
	<label for={label}>{label}</label>
</div>

<style>
</style>
