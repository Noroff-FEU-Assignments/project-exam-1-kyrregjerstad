// clickOutside.ts
import { onDestroy } from "svelte";

export function clickOutside(node: HTMLElement, { enabled = true, exclude = [] } = {}) {
	if (!enabled) return;

	function handleClickOutside(event: MouseEvent) {
		if (!node.contains(event.target as Node) && !exclude.includes(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent("clickOutside"));
		}
	}

	document.addEventListener("click", handleClickOutside);
	// document.addEventListener('touchend', handleClickOutside);

	onDestroy(() => {
		document.removeEventListener("click", handleClickOutside);
		// document.removeEventListener('touchend', handleClickOutside);
	});
}
