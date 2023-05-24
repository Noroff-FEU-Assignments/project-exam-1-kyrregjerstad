import { validationSchema } from "./validationSchema";

export function validateInputField(fieldName: string, value: string): string | null {
	if (!(fieldName in validationSchema)) {
		console.warn(`This field is not a part of the validation schema: ${fieldName}`);
		return null;
	}
	const key = fieldName as keyof typeof validationSchema;
	return validationSchema[key].validate(value);
}
