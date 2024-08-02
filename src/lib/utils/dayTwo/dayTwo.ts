import { cookieCounter } from '$lib/stores/daytwoStore';

export const increment = () => {
	cookieCounter.update((n) => n + 1);
    
};

export const decrement = () => {
	cookieCounter.update((n) => n - 1);
};

export const reset = ()=>{
    cookieCounter.set(0);
}