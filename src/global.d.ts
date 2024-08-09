
//day one 
interface Persons {
	name: string;
	tally: number;
}

// day three
interface Children {
	name: string;
	weight: number;
}

interface Gifts {
	name: string;
	weight: number;
}

interface Trips {
	id: number;
	gifts: Gifts[];
}