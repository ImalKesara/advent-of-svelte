<script lang="ts">
	import Smile from '../../../lib/components/Icon/dayTwoicons/Smile.svelte';
	import { increment, decrement, reset, maxCookies, count } from '$lib/utils/dayTwo/dayTwo';
	import { cookieCounter, progress } from '$lib/stores/daytwoStore';
	import Icon from '@iconify/svelte';

	let container: any;
</script>

<div class=" m-auto my-24 h-full max-w-7xl border-1 border-bgrey p-5">
	<div class="grid h-full grid-cols-12 border-1 border-bgrey">
		<div class="image-wrapper col-span-6 place-content-center p-5">
			<div bind:this={container} class="grid grid-cols-10"></div>
		</div>
		<div class="col-span-6 grid items-center justify-center gap-5 p-5">
			<div class="grid grid-cols-12">
				<div class="col-span-5">
					<Smile width={128} height={128} />
				</div>
				<h1 class=" col-span-4 grid items-center text-xl">Santa's mood status</h1>
			</div>

			<div>
				<progress class="w-full rounded-lg" value={$progress}></progress>
			</div>

			<div class="flex justify-between px-5">
				<p>Total cookies eaten : {$cookieCounter}</p>
				<p>Max Cookies : {maxCookies - $cookieCounter}</p>
			</div>

			<!-- Main functions -->
			<div class="flex flex-col">
				<button
					on:click={() => {
						if (count < maxCookies) {
							increment();
							const cookie = document.createElement('img');
							cookie.src = 'src/lib/components/Icon/day Two icons/cookie.png';
							container.appendChild(cookie);
						}
					}}>Add</button
				>
				<button
					on:click={() => {
						if (count > 0) {
							decrement();
							if (container && container.lastChild) {
								container.removeChild(container.lastChild);
							}
						}
					}}>Remove</button
				>
				<button
					on:click={() => {
						reset();
						while (container && container.lastChild) {
							container.removeChild(container.lastChild);
						}
					}}>Reset</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		@apply mb-1 rounded-lg bg-greenC px-5 py-3 font-sansSerif font-bold;
	}
</style>
