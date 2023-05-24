export interface Post {
	id: number;
	attributes: {
		title: string;
		body: string;
		date: string | Date;
		summary: string;
		image: {
			data: {
				attributes: {
					formats: {
						thumbnail: {
							url: string;
						};
						small: {
							url: string;
						};
						medium: {
							url: string;
						};
						large: {
							url: string;
						};
					};
				};
			};
		};
	};
}

export type Posts = Post[];

export interface Comment {
	body: string;
	username: string;
	email: string;
	likes: number;
	commentId: string;
	postId: number;
}

interface CommentWithTimestamps extends Comment {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface CommentFromServer {
	id: number;
	attributes: CommentWithTimestamps;
}

export interface Toast {
	id: number;
	type: "info" | "success" | "warning" | "error";
	title?: string;
	message: string;
	dismissible: boolean;
	timeout: number;
}

export type Toasts = Toast[];

export interface ModerationResponse {
	message: string;
	rating: number;
}

// UI menu items

export interface IColorPreset {
	name: string;
	primaryColor: string;
	backgroundColor: string;
	accentColor: string;
	textColor: string;
	textMultiplier: number;
	lineHeight: number;
	createdByUser: boolean;
}

export interface FormInput {
	name: string;
	email: string;
	message: string;
}

export interface FormErrors {
	[key: string]: string | null;
}

export interface FormResponse {
	success?: boolean;
	fields?: FormInput;
	errors?: FormErrors;
}

export interface ServerResponse {
	data: FormResponse;
}
