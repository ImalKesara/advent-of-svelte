<script lang="ts">
	import Smile from './../../../lib/components/Icon/day Two icons/Smile.svelte';
	import { increment, decrement, reset } from '$lib/utils/dayTwo/dayTwo';
	import { cookieCounter, progress } from '$lib/stores/daytwoStore';
    
    
</script>

<div class=" m-auto my-24 max-w-7xl border-1 border-bgrey p-5">
	<div class="grid h-full grid-cols-12 border-1 border-bgrey">
		<div  class="image-wrapper col-span-7">

        </div>
		<div class="col-span-5 grid items-center justify-center gap-5">
			<div class="grid grid-cols-12">
				<div class="col-span-5">
					<Smile width={128} height={128} />
				</div>
				<h1 class=" col-span-4 grid items-center text-xl">Santa's mood status</h1>
			</div>

			<div>
				<progress class="w-full rounded-lg" value={$progress}></progress>
			</div>
			<p>Total cookies eaten {$cookieCounter}</p>

			<!-- Main functions -->
			<div class="flex flex-col">
				<button
					on:click={increment}
					on:click={() => {
						let div = document.createElement('div');
						let p = document.createElement('p');
						div.append(p);
					}}>Add</button
				>
				<button on:click={decrement}>Remove</button>
				<button on:click={reset}>Reset</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		@apply mb-1 rounded-lg bg-greenC px-5 py-3 font-sansSerif font-bold;
	}
</style>
