import { persons } from "$lib/stores/dayoneStore";
import { get } from 'svelte/store';

let niceChildren: number = 0;

export const loadNiceChildren = () => {
    niceChildren  = 0;
    const personsArray = get(persons);
    personsArray.forEach((person) => {
        if (person.tally > 0) {
            niceChildren++;
        }
        return;
    });
};
