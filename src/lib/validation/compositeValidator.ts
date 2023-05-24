import { MinLengthValidator } from "./minLengthValidator";
import { RegExValidator, type RegExValidatorOptions } from "./regExValidator";

export interface ValidatorOptions {
	minLength: number;
	regExValidator: RegExValidatorOptions;
}

export class Validator {
	minLengthValidator: MinLengthValidator;
	regExValidator: RegExValidator;

	constructor({ minLength, regExValidator }: ValidatorOptions) {
		this.minLengthValidator = new MinLengthValidator(minLength);
		this.regExValidator = new RegExValidator(regExValidator);
	}

	validate(input: string): string | null {
		return this.minLengthValidator.validate(input) || this.regExValidator.validate(input) || null;
	}
}
