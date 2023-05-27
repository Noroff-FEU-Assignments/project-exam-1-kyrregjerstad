import { writable } from "svelte/store";
import type { Toast } from "$lib/types";

export const toasts = writable<Toast[]>([]);

export const dismissToast = (id: number): void => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};

export const addToast = (toast: Partial<Toast>): void => {
	const id = Math.floor(Math.random() * 10000);

	const defaults: Toast = {
		id,
		type: "info",
		title: "",
		message: "",
		dismissible: true,
		timeout: 30000
	};

	const t: Toast = { ...defaults, ...toast };
	toasts.update((all) => [t, ...all]);

	if (t.timeout) setTimeout(() => dismissToast(id), t.timeout);
};
