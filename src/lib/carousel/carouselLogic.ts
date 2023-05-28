import type { Posts } from "$lib/types";

interface transitionProps {
	startIndex: number;
	maxPosts: number;
	posts: Posts;
}

export function transitionToNextPosts({ startIndex, maxPosts, posts }: transitionProps): number {
	if (startIndex + maxPosts < posts.length) {
		startIndex += maxPosts;
	} else {
		startIndex = 0;
	}
	return startIndex;
}

export function transitionToPreviousPosts({
	startIndex,
	maxPosts,
	posts
}: transitionProps): number {
	if (startIndex > 0) {
		startIndex -= Math.min(maxPosts, startIndex);
	} else {
		startIndex = Math.max(posts.length - maxPosts, 0);
	}
	return startIndex;
}

export function getVisiblePosts({ startIndex, maxPosts, posts }: transitionProps) {
	const visiblePosts = [...posts.slice(startIndex, startIndex + maxPosts)];
	while (visiblePosts.length < maxPosts) {
		visiblePosts.push(...posts.slice(0, maxPosts - visiblePosts.length));
	}
	return visiblePosts;
}

export function setTransitionLock(duration: number): Promise<boolean> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(false);
		}, duration);
	});
}
