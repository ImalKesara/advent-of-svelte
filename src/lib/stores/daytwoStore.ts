import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicIn, cubicOut } from 'svelte/easing';

export const cookieCounter = writable(0);
export const progress = tweened(0, {
	duration: 300,
	easing: cubicOut
});
