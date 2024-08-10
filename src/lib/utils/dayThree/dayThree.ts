import { children } from '$lib/stores/daythreeStore';



export const totalWeight = (children: Children[]): number => {
	return children.reduce((accur, curr) => accur + curr.weight, 0);
};

export const avgTrips = (totalweight: number): number => {
	return Math.ceil(totalweight / 100);
};



