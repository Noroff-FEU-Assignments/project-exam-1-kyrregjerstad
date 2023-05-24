<script lang="ts">
	import { enhance } from "$app/forms";
	import FormInput from "$components/inputs/FormInput.svelte";
	import { addToast } from "$lib/stores/notifications";

	export let form;
	let messageSent = false;

	$: if (form?.status === 200) {
		messageSent = true;
		addToast({
			title: "Message sent",
			message: "Your message has been sent! I'll get back to you as soon as possible.",
			type: "success",
			timeout: 6000
		});
	}

	$: if (form?.status === 500) {
		messageSent = false;
		addToast({
			title: "Error",
			message: `Something went wrong. Please try again later. Error: ${form.data.errors}`,
			type: "error",
			timeout: 6000
		});
	}
</script>

<form use:enhance method="POST">
	<FormInput name="name" required={true} inputType="text" serverResponse={form} />
	<FormInput name="email" required={true} inputType="email" serverResponse={form} />
	<FormInput name="message" required={true} inputType="message" serverResponse={form} />
	<button type="submit">{messageSent ? "Sent" : "Send"}</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		gap: 2rem;
	}

	button {
		padding: 0.5rem;
		background-color: var(--color-primary);
		color: var(--color-text);
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>
