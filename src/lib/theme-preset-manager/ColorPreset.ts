import type { IColorPreset } from "$lib/types";

export default class ColorPreset implements IColorPreset {
	name: string;
	primaryColor: string;
	backgroundColor: string;
	accentColor: string;
	textColor: string;
	textMultiplier: number;
	lineHeight: number;
	createdByUser: boolean;

	constructor({
		name,
		primaryColor,
		backgroundColor,
		accentColor,
		textColor,
		textMultiplier,
		lineHeight,
		createdByUser
	}: IColorPreset) {
		this.name = name;
		this.primaryColor = primaryColor;
		this.backgroundColor = backgroundColor;
		this.accentColor = accentColor;
		this.textColor = textColor;
		this.textMultiplier = textMultiplier;
		this.lineHeight = lineHeight;
		this.createdByUser = createdByUser;
	}
}
