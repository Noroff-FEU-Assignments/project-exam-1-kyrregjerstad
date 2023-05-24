export class MinLengthValidator {
	required: boolean;
	minLength: number;

	constructor(minLength: number) {
		this.required = true;
		this.minLength = minLength;
	}

	validate(input: string): string | null {
		if (this.required && (!input || input.trim() === "")) {
			return "This field is required.";
		}
		if (input.length < this.minLength) {
			return `Input must be at least ${this.minLength} characters long.`;
		}
		return null;
	}
}
