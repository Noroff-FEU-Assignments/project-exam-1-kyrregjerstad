export function stringToObj(str: string) {
	const regex = /\{[^}]*\}/;
	const match = str.match(regex) || [];
	const objectString = match[0] || "";

	const cleanedObjectString = objectString.replace(/\\n|\\/g, "");
	const jsonString = "{" + cleanedObjectString.slice(1, -1).replace(/(\w+):/g, '"$1":') + "}";

	return JSON.parse(jsonString);
}
