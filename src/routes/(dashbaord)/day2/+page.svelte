<script lang="ts">
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
	if ($cookieCounter === -1) {
		setTimeout(() => {
			reset();
		}, 2000);
	}
</script>

<div class=" m-auto mb-10 mt-24 h-full max-w-7xl border-1 border-bgrey p-5">
	<div class="my-10 grid grid-cols-12 gap-x-5 md:h-full">
		<div class="col-span-7 flex-wrap place-content-center px-5">
			<div class="grid grid-cols-4 gap-x-8 md:grid-cols-10 md:gap-x-0">
				{#each cookies as Cookie}
					<Cookie width={52} height={52} />
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
					{:else if $cookieCounter <= 25}
						<Moree width={128} height={128} />
					{:else if $cookieCounter <= 35}
						<Neutral width={128} height={128} />
					{:else if $cookieCounter <= 40}
						<Notgood width={128} height={128} />
					{:else if $cookieCounter <= 45}
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
				<progress class="w-full rounded-lg" value={$progress}></progress>
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
							if ($cookieCounter === 50) {
								setInterval(() => {
									decrement();
									cookies.pop();
									cookies = cookies;
								}, 100);
							}
						}
					}}>Add</button
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
		@apply mb-1 rounded-lg bg-greenC px-5 py-3 font-sansSerif font-bold;
	}
</style>
