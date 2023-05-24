import type { IColorPreset } from "$lib/types";

export function setCSSCustomProperty(
	selectedPreset: IColorPreset,
	hasLoaded = false,
	customPropertyMap = propertyMap
): void {
	if (!hasLoaded) return;
	const cssRoot = document.documentElement.style;

	for (const cssVariable in customPropertyMap) {
		const presetProperty = customPropertyMap[cssVariable];
		const value = String(selectedPreset[presetProperty]);
		cssRoot.setProperty(cssVariable, value);
	}
}

const propertyMap: Record<string, keyof IColorPreset> = {
	"--color-primary": "primaryColor",
	"--color-background": "backgroundColor",
	"--color-accent": "accentColor",
	"--color-text": "textColor",
	"--font-size-multiplier": "textMultiplier",
	"--line-height-multiplier": "lineHeight"
};
