import { persons } from '$lib/stores/dayoneStore';

let niceChildrens: number;
let naughtyChildrens: number;
let nicestChild: string;
let naughtChild: string;
let isSideBarShowing :boolean  =false;

export const loadniceChilds = (persons: Persons[]): number => {
	niceChildrens = 0;
	persons.forEach((person) => (person.tally >= 0 ? niceChildrens++ : niceChildrens));
	return niceChildrens;
};

export const loadnaughtChilds = (persons: Persons[]): number => {
	naughtyChildrens = 0;
	persons.forEach((person) => (person.tally < 0 ? naughtyChildrens++ : naughtyChildrens));
	return naughtyChildrens;
};

export const findGoodChild = (persons: Persons[]): string => {
	let largest: number = 0;
	persons.forEach((person) => {
		if (person.tally >= largest) {
			largest = person.tally;
			nicestChild = person.name;
		}
	});
	return nicestChild;
};

export const findbadChild = (persons: Persons[]): string => {
	let smallest: number = 0;
	persons.forEach((person) => {
		if (person.tally <= smallest) {
			smallest = person.tally;
			naughtChild = person.name;
		}
	});
	return naughtChild;
};

export const toggleSideBar = () : boolean => {
	return isSideBarShowing = !isSideBarShowing;
};

