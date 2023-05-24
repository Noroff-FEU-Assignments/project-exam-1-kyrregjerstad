export interface RegExValidatorOptions {
	regEx: string;
	error: string;
}

export class RegExValidator {
	regEx: RegExp;
	error: string;

	constructor({ regEx, error }: RegExValidatorOptions) {
		this.regEx = new RegExp(regEx);
		this.error = error;
	}

	validate(input: string): string | null {
		if (!this.regEx.test(input)) {
			return this.error;
		}
		return null;
	}
}
