import { writable } from 'svelte/store';
import data from '../../seed.json';
// import data from '../../routes/(dashbaord)/day3/+page'


export const persons = writable<Persons[]>([]);

export const loadPersons = () => {
	persons.set(data.persons);
};



