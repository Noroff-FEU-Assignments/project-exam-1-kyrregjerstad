import { onDestroy } from "svelte";

interface ClickOutsideOptions {
	enabled?: boolean;
	exclude?: HTMLElement[];
}

export function clickOutside(node: HTMLElement, options: ClickOutsideOptions = {}): void {
	const { enabled = true, exclude = [] } = options;

	if (!enabled) return;

	function handleClickOutside(event: MouseEvent): void {
		if (!node.contains(event.target as Node) && !exclude.includes(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent("clickOutside"));
		}
	}

	document.addEventListener("click", handleClickOutside);

	onDestroy(() => {
		document.removeEventListener("click", handleClickOutside);
	});
}
