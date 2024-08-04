import { cookieCounter, progress } from '$lib/stores/daytwoStore';

export const maxCookies: number = 50;
export let count: number = 0;

export const increment = () => {
	if (count < maxCookies) {
		cookieCounter.update((n) => n + 1);
		progress.update((n) => n + 1);
		count++;
	}
};

export const decrement = () => {
	if (count > -1) {
		cookieCounter.update((n) => n - 1);
		progress.update((n) => n - 1);
		count--;
	}
};

export const reset = () => {
	cookieCounter.set(0);
	progress.set(0);
	count = 0;
};
