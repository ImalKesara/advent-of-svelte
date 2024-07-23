import { writable } from 'svelte/store';
import data from '../../seed.json';

export const persons = writable<Persons[]>([]);

export const loadPersons = () => {
	persons.set(data.persons);
};
