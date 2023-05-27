export type Comment = {
	id: string;
	body: string;

	likes: number;
};

let comments: Comment[] = [
	{
		id: crypto.randomUUID(),
		body: "Comment 1",
		likes: 1
	},
	{
		id: crypto.randomUUID(),
		body: "Comment 2",
		likes: 1
	},
	{
		id: crypto.randomUUID(),
		body: "Comment 3",
		likes: 1
	},
	{
		id: crypto.randomUUID(),
		body: "Comment 4",
		likes: 1
	},
	{
		id: crypto.randomUUID(),
		body: "Comment 5",
		likes: 1
	},
	{
		id: crypto.randomUUID(),
		body: "Comment 6",
		likes: 1
	}
];

export function getComments() {
	return comments;
}

export function addComment(text: string) {
	const comment: Comment = {
		id: crypto.randomUUID(),
		body: text,
		likes: 1
	};
	comments.push(comment);
}

export function removeComment(id: string) {
	comments = comments.filter((comment) => comment.id !== id);
}

export function clearComments() {
	comments = [];
}

export function handleLike(id: string) {
	const comment = comments.find((comment) => comment.id === id);
	if (comment) {
		comment.likes += 1;
	}
}
