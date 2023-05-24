import { Validator, type ValidatorOptions } from "./compositeValidator";

const nameValidation: ValidatorOptions = {
	minLength: 5,
	regExValidator: { regEx: "^[a-zA-Z\\s]{3,}$", error: "Invalid name format." }
};

const subjectValidation: ValidatorOptions = {
	minLength: 15,
	regExValidator: { regEx: "^[a-zA-Z\\s]{3,}$", error: "Invalid subject format." }
};

const emailValidation: ValidatorOptions = {
	minLength: 3,
	regExValidator: { regEx: "^\\S+@\\S+\\.\\S+$", error: "Invalid email format." }
};

const messageValidation: ValidatorOptions = {
	minLength: 25,
	regExValidator: {
		regEx: "^.{25,}$",
		error:
			"Invalid message format. Messages can only contain numbers, letters and special characters"
	}
};

export const validationSchema = {
	name: new Validator(nameValidation),
	email: new Validator(emailValidation),
	subject: new Validator(subjectValidation),
	message: new Validator(messageValidation)
};
