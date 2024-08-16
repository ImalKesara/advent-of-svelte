import { writable } from 'svelte/store';
import data from '../../../src/seedTwo.json';

export const children = writable<Children[]>([]);
export const createtrip = writable(1);


export const loadChildren = () => {
	children.set(data.childrens);
};
