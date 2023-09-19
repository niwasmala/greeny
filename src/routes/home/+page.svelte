<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-24">
	<Header title="Encyclopedia" subtitle="My collection of Earth's wonders" />

	<div class="relative flex flex-row gap-4">
		<div class="absolute -left-4 w-20 flex flex-col gap-4">
			<div class="bg-white border-t-2 border-r-2 border-b-2 border-neutral-200 rounded-tr-lg rounded-br-lg p-3 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
				  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
				</svg>
			</div>

			<div class="bg-green-100 h-[50vh] rounded-tr-lg rounded-br-lg p-3 flex flex-col justify-center justify-between">
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
						</svg>
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
						</svg>
					</div>
					<div class="text-xs">
						Animal
					</div>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
						</svg>
					</div>
					<div class="text-xs">
						Plants
					</div>
				</div>
			</div>
		</div>

		<div class="ml-20 flex-1 w-full grid grid-cols-2 gap-4">
			<a href="/home/mount-papandayan" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/mount-papandayan.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Mt Papandayan
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/home/kiara-artha-park" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/kiara-artha-park.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Kiara Artha Park
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/home/gasibu" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/gasibu.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Gasibu
					</div>
					<div class="text-xs">
						Landscape
					</div>
				</div>
			</a>
			<a href="/home/panda" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/panda.jpg')">
				<div class="w-full rounded-b-xl bg-neutral-900/50 text-white py-2 flex flex-col items-center">
					<div class="text-sm">
						Panda
					</div>
					<div class="text-xs">
						Animal
					</div>
				</div>
			</a>
			<a href="/home/sunflower" class="h-40 w-full flex flex-col justify-end  items-center bg-neutral-200 rounded-xl bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/sunflower.jpg')">
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

<Footer active="home" />