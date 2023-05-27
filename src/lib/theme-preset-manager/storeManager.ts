import { writable } from "svelte/store";
import type { IColorPreset } from "$lib/types";
import { resetPresets, deletePreset, createPreset } from "$lib/theme-preset-manager";
import { initialPresets } from "./initialThemePresets";

export const colorPresetsStore = writable<IColorPreset[]>(structuredClone(initialPresets));

export function resetPresetsStore(): void {
	colorPresetsStore.set(resetPresets(initialPresets));
}

export function deletePresetFromStore(name: string): void {
	colorPresetsStore.update((presets) => deletePreset(presets, name));
}

export function createPresetInStore(
	newPresetName: string,
	selectedPreset: IColorPreset
): IColorPreset {
	const newPreset = createPreset(newPresetName, selectedPreset);
	colorPresetsStore.update((presets) => [...presets, newPreset]);
	return newPreset;
}
