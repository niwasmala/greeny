<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-32">
	<Header title="Explore" subtitle="Find Your Next Awesome Adventure" />

	<div class="flex flex-col gap-4">
		<div class="w-full flex flex-row gap-4">
			<div class="flex-1 bg-white rounded-md border-2 flex flex-row items-center justify-between">
				<input type="text" class="w-full flex py-2 px-2 rounded-md" placeholder="Find your next adventure!" />
				<div class="p-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</div>
			</div>
			<div class="w-18 bg-white rounded-md border-2 flex items-center justify-center p-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
				</svg>
			</div>
		</div>

		<div class="flex-1 w-full grid grid-cols-2 gap-4">
			<a href="/explore/mount-rinjani" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat" style="background-image: url('/encyclopedia/mount-rinjani.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Mount Rinjani
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/explore/mount-papandayan" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat" style="background-image: url('/encyclopedia/mount-papandayan.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Mount Papandayan
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/home/kawah-putih" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/kawah-putih.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Kawah Putih
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/explore/kiara-artha-park" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/kiara-artha-park.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Kiara Artha Park
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/explore/gasibu" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/gasibu.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Gasibu
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/explore/panda" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/panda.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Panda
					</div>
					<div class="text-xs">
						Animal
					</div>
				</div>
			</a>
			<a href="/explore/sunflower" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/sunflower.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Sunflower
					</div>
					<div class="text-xs">
						Plant
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<Footer active="explore" />