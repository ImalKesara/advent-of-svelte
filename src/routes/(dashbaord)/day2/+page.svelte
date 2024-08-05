<script lang="ts">
	import { fade } from 'svelte/transition';
	import Exhaust from '$lib/components/Icon/day Two icons/Exhaust.svelte';
	import Neutral from '$lib/components/Icon/day Two icons/Neutral.svelte';
	import Gross from '$lib/components/Icon/day Two icons/Gross.svelte';
	import Wzoo from '$lib/components/Icon/day Two icons/Wzoo.svelte';
	import Moree from '$lib/components/Icon/day Two icons/Moree.svelte';
	import SmileMore from '$lib/components/Icon/day Two icons/SmileMore.svelte';
	import Smile from '$lib/components/Icon/day Two icons/Smile.svelte';
	import Cookie from '$lib/components/Icon/day Two icons/Cookie.svelte';
	import { increment, decrement, reset, maxCookies, count } from '$lib/utils/dayTwo/dayTwo';
	import { cookieCounter, progress } from '$lib/stores/daytwoStore';
	import Notgood from '$lib/components/Icon/day Two icons/Notgood.svelte';

	let cookies: any[] = [];
	$: console.log($cookieCounter, cookies.length);
</script>

<div class=" m-auto mb-10 mt-24 h-full max-w-7xl border-1 border-bgrey p-5">
	<div class="my-10 grid grid-cols-12 gap-x-5">
		<div class="col-span-7 h-128 flex-wrap gap-20 md:h-full md:place-content-center">
			<div class="grid grid-cols-5 md:grid-cols-10">
				{#each cookies as Cookie}
					<div transition:fade={{ delay: 75, duration: 150 }}>
						<Cookie width={52} height={52} />
					</div>
				{/each}
			</div>
		</div>
		<div class="col-span-5 grid items-center justify-center gap-5 p-5">
			<div class="grid items-center justify-center md:grid-cols-12">
				<div class="col-span-12 grid justify-items-center md:col-span-5">
					{#if $cookieCounter < 0}
						<Exhaust width={128} height={128} />
					{:else if $cookieCounter <= 5}
						<Smile width={128} height={128} />
					{:else if $cookieCounter <= 10}
						<SmileMore width={128} height={128} />
					{:else if $cookieCounter <= 35}
						<Moree width={128} height={128} />
					{:else if $cookieCounter <= 40}
						<Neutral width={128} height={128} />
					{:else if $cookieCounter <= 43}
						<Notgood width={128} height={128} />
					{:else if $cookieCounter <= 48}
						<Wzoo width={128} height={128} />
					{:else if $cookieCounter <= 50}
						<Gross width={128} height={128} />
					{/if}
				</div>
				<h1 class="col-span-12 grid items-center text-center text-xl md:col-span-6">
					Santa's mood status
				</h1>
			</div>

			<div>
				<progress class="w-full rounded-lg bg-greenC" value={$progress} max="50"></progress>
			</div>

			<div class="justify-between px-0 md:flex md:px-5">
				<p>Cookies eaten : {$cookieCounter}</p>
				<p>Save Cookies : {maxCookies - $cookieCounter}</p>
			</div>

			<!-- Main functions -->
			<div class="flex flex-col">
				<button
					on:click={() => {
						if (count < maxCookies) {
							increment();
							cookies = [...cookies, Cookie];
							if ($cookieCounter >= 50) {
								const interval = setInterval(() => {
									decrement();
									cookies.pop();
									cookies = cookies;
								}, 75);
								setTimeout(() => {
									clearInterval(interval);
									reset();
									cookies = [];
								}, 6500);
							}
						}
					}}>Eat</button
				>
				<button
					on:click={() => {
						if (count > 0) {
							decrement();
							cookies.pop();
							cookies = cookies;
						}
					}}>Remove</button
				>
				<button
					on:click={() => {
						reset();
						cookies = [];
					}}>Reset</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		@apply mb-1 rounded-lg bg-greenC px-5 py-3 font-sansSerif font-bold transition-colors duration-300 hover:bg-green-400;
	}

	progress {
		width: 100%;
		height: 0.9rem;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		@apply rounded-lg bg-white;
	}

	progress::-webkit-progress-value {
		@apply rounded-lg bg-sky-500;
	}

	progress::-moz-progress-bar {
		@apply rounded-lg bg-sky-500;
	}
</style>
