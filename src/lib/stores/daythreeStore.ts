import { writable } from 'svelte/store';
import data from '../../../src/seedTwo.json';

export const children = writable<Children[]>([]);

export const loadChildren = () => {
	children.set(data.childrens);
};
