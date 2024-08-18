export const load = async ({ fetch }) => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json');
	const data = await res.json();
	return {
		data 
	};
};
