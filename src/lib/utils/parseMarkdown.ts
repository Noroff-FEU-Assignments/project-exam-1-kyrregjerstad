interface Rule {
	regex: RegExp;
	replacement: string;
}

function wrapBrWithPTags(html: string): string {
	const chunks = html.split("<br />");
	let result = "";

	for (let i = 0; i < chunks.length; i++) {
		const chunk = chunks[i].trim();

		if (i === 0 && !chunk.startsWith("<") && chunk.length > 0) {
			result += `<p>${chunk}`;
			continue;
		}

		if (i === chunks.length - 1 && !chunk.endsWith(">") && chunk.length > 0) {
			if (!result.endsWith("<p>")) {
				result += `<p>`;
			}
			result += `${chunk}</p>`;
			break;
		}

		if (chunk.startsWith("<") && chunk.endsWith(">")) {
			if (result.endsWith("<p>")) {
				result = result.slice(0, -3);
			}
			result += `${chunk}`;
		} else if (chunk.length > 0) {
			if (!result.endsWith("<p>")) {
				result += `<p>`;
			}
			result += `${chunk}`;
		}
	}

	// Remove extra <br> tags inside <p> tags
	result = result.replace(/<p><br>/g, "<p>");
	result = result.replace(/<br><\/p>/g, "</p>");

	return result;
}

export function parseMarkdown(markdown: string): string {
	const rules: Rule[] = [
		{ regex: /\*\*(.+?)\*\*/g, replacement: "<strong>$1</strong>" },
		{ regex: /\*(.+?)\*/g, replacement: "<em>$1</em>" },
		{ regex: /__(.+?)__/g, replacement: "<strong>$1</strong>" },
		{ regex: /_(.+?)_/g, replacement: "<em>$1</em>" },
		{ regex: /^###\s(.+)/gm, replacement: "<h3>$1</h3>" },
		{ regex: /^##\s(.+)/gm, replacement: "<h2>$1</h2>" },
		{ regex: /^#\s(.+)/gm, replacement: "<h1>$1</h1>" },
		{ regex: /^\* (.+)/gm, replacement: "<li>$1</li>" },
		{ regex: /^\d\. (.+)/gm, replacement: "<li>$1</li>" },
		{ regex: /!\[(.*?)\]\((.+?)\)/g, replacement: '<img alt="$1" src="$2">' },
		{ regex: /\[(.+?)\]\((.+?)\)/g, replacement: '<a href="$2">$1</a>' },
		{ regex: /\n/g, replacement: "<br />" },
		{ regex: /\n\n+/g, replacement: "<br /><br />" },
		{ regex: /---/g, replacement: "<hr>" }
	];

	let html = rules.reduce((html, rule) => {
		return html.replace(rule.regex, rule.replacement);
	}, markdown);

	html = wrapBrWithPTags(html);

	return html;
}
