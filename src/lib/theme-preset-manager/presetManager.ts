import type { IColorPreset } from "$lib/types";
import { get } from "svelte/store";
import { colorPresetsStore } from "./storeManager";
import ColorPreset from "./ColorPreset";

export function resetPresets(presets: IColorPreset[]): IColorPreset[] {
	return structuredClone(presets);
}

export function deletePreset(presets: IColorPreset[], name: string): IColorPreset[] {
	return presets.filter((preset) => {
		if (preset.createdByUser) {
			return preset.name !== name;
		} else {
			return true;
		}
	});
}

export function createPreset(newPresetName: string, selectedPreset: IColorPreset) {
	const currentPresets = get(colorPresetsStore);
	const nameExists = currentPresets.find((preset) => preset.name === newPresetName);

	if (nameExists) {
		let counter = 1;
		const originalName = newPresetName;
		while (currentPresets.find((preset) => preset.name === newPresetName)) {
			newPresetName = `${originalName} (${counter})`;
			counter++;
		}
	}

	const newPreset = new ColorPreset({
		...selectedPreset,
		name: newPresetName,
		createdByUser: true
	});

	return newPreset;
}
