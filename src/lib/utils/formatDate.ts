export function formatDate(timestamp: string) {
	const date = new Date(timestamp);

	const day = date.getDate();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const month = monthNames[date.getMonth()];
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	function ordinalSuffix(num: number) {
		const j = num % 10;
		const k = num % 100;

		if (j === 1 && k !== 11) {
			return num + "st";
		}
		if (j === 2 && k !== 12) {
			return num + "nd";
		}
		if (j === 3 && k !== 13) {
			return num + "rd";
		}
		return num + "th";
	}

	return `${ordinalSuffix(day)} ${month}, ${year} - ${hours}:${minutes}`;
}
