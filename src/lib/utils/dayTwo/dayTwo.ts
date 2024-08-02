import { cookieCounter, progress } from '$lib/stores/daytwoStore';
import { get } from 'svelte/store';

export const copy = get(cookieCounter);

export const increment = () => {
	if (copy < 50) {
		cookieCounter.update((n) => n + 1);
		progress.update((n) => n + 0.02);
	}
};

export const decrement = () => {
	cookieCounter.update((n) => n - 1);
	progress.update((n) => n - 0.02);
};

export const reset = () => {
	cookieCounter.set(0);
	progress.set(0);
};
