import type { FormResponse } from "$lib/types";

export const postContactFormToDB = async (
	form: FormResponse,
	URL: RequestInfo | URL,
	APIKey: string
) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${APIKey}`
		},
		body: JSON.stringify({
			data: {
				name: form.fields?.name,
				email: form.fields?.email,
				message: form.fields?.message
			}
		})
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();
		return data.data;
	} catch (error) {
		console.warn(error);
	}
};
