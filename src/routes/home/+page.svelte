<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-24">
	<Header title="My Encyclopedia" subtitle="Gotta capture them all" />

	<div class="relative flex flex-row gap-4">
		<div class="absolute -left-4 w-20 flex flex-col gap-4">
			<div class="bg-white border-t-2 border-r-2 border-b-2 border-neutral-200 rounded-tr-lg rounded-br-lg p-3 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
				  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
				</svg>
			</div>

			<div class="bg-green-100 h-[50vh] rounded-tr-lg rounded-br-lg p-3 flex flex-col justify-center justify-between">
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white"></div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white"></div>
					<div class="text-xs">
						Animal
					</div>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white"></div>
					<div class="text-xs">
						Plants
					</div>
				</div>
			</div>
		</div>

		<div class="ml-20 flex-1 w-full grid grid-cols-2 gap-4">
			<div class="flex flex-col">
				<a href="/home/mount-papandayan" class="w-full h-40 bg-neutral-200 rounded-xl flex flex-col items-center">
					<img src="/missions/mount-papandayan.jpg" alt="Mount Papandayan" class="rounded-t-xl mb-2" />
					<div class="text-sm">
						Mount Rinjani
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<Footer active="home" />