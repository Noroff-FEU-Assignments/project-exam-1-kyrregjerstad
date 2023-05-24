<script lang="ts">
	import type { ServerResponse } from "$lib/types";
	import { capitalizeFirstLetter } from "$utils/capitalizeFirstLetter";
	import { validateInputField } from "$validation";
	import type { HTMLInputTypeAttribute } from "svelte/elements";

	export let name: string = "";
	export let required = false;
	let displayName = capitalizeFirstLetter(name) + `${required ? "*" : ""}`;
	export let placeholder = "" || displayName;
	export let inputType: HTMLInputTypeAttribute;
	export let serverResponse: ServerResponse | null;

	$: serverErrorMessage = serverResponse?.data?.errors?.[name];

	let isValid: boolean | null = null;
	let value = "";
	let touched = false;
	let error: string | null = null;

	function handleValidation() {
		if (!touched) return null;
		error = validateInputField(name, value);
		isValid = error ? false : true;
		return error;
	}

	function handleInput() {
		touched = true;
		handleValidation();
	}

	$: error = serverErrorMessage || handleValidation();
</script>

<label for={name}>
	{displayName}
	{#if inputType === "text"}
		<input
			type="text"
			{placeholder}
			id={name}
			{name}
			{required}
			bind:value
			on:input={handleInput}
			class:valid={isValid}
			class:error={isValid === false}
		/>
	{:else if inputType === "email"}
		<input
			type="email"
			{placeholder}
			id={name}
			{name}
			{required}
			bind:value
			on:input={handleInput}
			class:valid={isValid}
			class:error={isValid === false}
		/>
	{:else if inputType === "message"}
		<textarea
			{placeholder}
			id={name}
			{name}
			{required}
			bind:value
			on:input={handleInput}
			class:valid={isValid}
			class:error={isValid === false}
		/>
	{/if}
	{#if error}
		<div class="error-message">
			<p>{error}</p>
		</div>
	{/if}
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		color: var(--color-text);
	}

	input,
	textarea {
		padding-inline: 0.5rem;
	}

	.error-message {
		color: red;
	}

	.error {
		color: red;
		outline: solid 2px red;
	}

	.valid {
		outline: solid 2px green;
	}
</style>
