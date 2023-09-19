<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-24">
	<Header title="Encyclopedia" subtitle="Capture Earth’s Wonders" />

	<div class="flex flex-col gap-4">
		<div class="w-full h-14 flex flex-row gap-4">
			<div class="flex-1 bg-white rounded-md border-2"></div>
			<div class="w-24 bg-white rounded-md border-2"></div>
		</div>

		<div class="flex-1 w-full grid grid-cols-2 gap-4">
			<div class="flex flex-col">
				<a href="/encyclopedia/mount-papandayan" class="w-full bg-neutral-200 rounded-xl flex flex-col items-center">
					<img src="/missions/mount-papandayan.jpg" alt="Mount Papandayan" class="rounded-t-xl" />
					<div class="py-2 flex flex-col items-center">
						<div class="text-sm">
							Mount Rinjani
						</div>
						<div class="text-xs">
							Landscape
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<Footer active="encyclopedia" />