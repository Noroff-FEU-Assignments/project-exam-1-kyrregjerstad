import type { validationSchema } from "./validationSchema";
import { validateInputField } from "./validateInputField";

export function validateAllInputFields(
	input: Record<string, string>
): Record<string, string | null> {
	const errors: Record<string, string | null> = {};

	for (const fieldName in input) {
		const value = input[fieldName];
		const errorMessage = validateInputField(fieldName as keyof typeof validationSchema, value);

		if (errorMessage) {
			errors[fieldName] = errorMessage;
		}
	}

	return errors;
}
