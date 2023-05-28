import type { ActionReturn } from "svelte/action";
import { onDestroy } from "svelte";

interface ClickOutsideOptions {
	enabled?: boolean;
	exclude?: HTMLElement[];
}

interface ClickOutsideAttributes {
	clickOutside?: (e: CustomEvent<null>) => void;
}

export function clickOutside(
	node: HTMLElement,
	options: ClickOutsideOptions = {}
): ActionReturn<ClickOutsideOptions, ClickOutsideAttributes> {
	let { enabled, exclude = [] } = options;
	enabled = enabled !== undefined ? enabled : true;

	function handleClickOutside(event: MouseEvent): void {
		if (!enabled) return;
		if (!node.contains(event.target as Node) && !exclude.includes(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent("clickOutside"));
		}
	}

	document.addEventListener("click", handleClickOutside);

	onDestroy(() => {
		document.removeEventListener("click", handleClickOutside);
	});

	return {
		update: (updatedOptions: ClickOutsideOptions) => {
			enabled = updatedOptions.enabled !== undefined ? updatedOptions.enabled : true;
			exclude = updatedOptions.exclude || [];
		},
		destroy: () => {
			document.removeEventListener("click", handleClickOutside);
		}
	};
}
