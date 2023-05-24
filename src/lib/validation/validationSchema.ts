import { Validator, type ValidatorOptions } from "./compositeValidator";

const nameValidation: ValidatorOptions = {
	minLength: 3,
	regExValidator: { regEx: "^[a-zA-Z\\s]{3,}$", error: "Invalid name format." }
};

const emailValidation: ValidatorOptions = {
	minLength: 3,
	regExValidator: { regEx: "^\\S+@\\S+\\.\\S+$", error: "Invalid email format." }
};

const messageValidation: ValidatorOptions = {
	minLength: 10,
	regExValidator: {
		regEx: "^.{10,}$",
		error:
			"Invalid message format. Messages can only contain numbers, letters and special characters"
	}
};

export const validationSchema = {
	name: new Validator(nameValidation),
	email: new Validator(emailValidation),
	message: new Validator(messageValidation)
};
