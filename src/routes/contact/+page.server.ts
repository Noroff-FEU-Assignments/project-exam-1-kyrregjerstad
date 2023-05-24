import { SECRET_API_SEND_MESSAGE } from "$env/static/private";
import { PUBLIC_API_POST_MESSAGE_URL } from "$env/static/public";

import { postContactFormToDB } from "$lib/server/postContactFormToDB";
import type { FormResponse } from "$lib/types";
import { validateAllInputFields } from "$lib/validation";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = String(formData.get("name"));
		const email = String(formData.get("email"));
		const message = String(formData.get("message"));

		const errors = validateAllInputFields({ name, email, message });

		if (Object.keys(errors).length) {
			const data: FormResponse = {
				success: false,
				fields: { name, email, message },
				errors
			};

			return fail(400, { data });
		} else {
			const data: FormResponse = {
				success: true,
				fields: { name, email, message }
			};

			try {
				await postContactFormToDB(data, PUBLIC_API_POST_MESSAGE_URL, SECRET_API_SEND_MESSAGE);
			} catch (error) {
				console.warn(error);
				return fail(500, { data, error });
			}

			return {
				status: 200,
				data
			};
		}
	}
};
