<script>
	let isShowSuccess = false
</script>

{#if isShowSuccess}
	<div class="max-w-lg mx-auto fixed z-30 bottom-0 left-0 right-0 fixed h-screen w-screen bg-neutral-900/50 flex justify-center items-center">
		<div class="bg-white w-96 h-72 rounded-xl flex flex-col items-center gap-8 p-4">
			<div class="text-3xl text-center font-black">
				Congratulations!
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
			</svg>

			<div class="text-2xl text-center">
				You just got 300 point!
			</div>


			<a href="/home" class="w-full h-14 flex items-center justify-center text-lg text-center py-2 px-4 bg-green-500 text-white">
				See My Encyclopedia
			</a>
		</div>
	</div>
{/if}

<div class="bg-white min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/encyclopedia/sunflower.jpg')">
	<div class="fixed p-4">
		<a href="/home" class="bg-white/80 rounded-full w-10 h-10 flex flex-col items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</a>
	</div>

	<div class="pt-[60vh]">
		<div class="bg-white w-full p-4 h-[40vh]">
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-1">
					<div class="text-xs font-semibold">
						Plant
					</div>
					<div class="text-lg font-black">
						Sunflower
					</div>
					<div class="text-xs">
						Large, bright yellow flowers with a dark center. 
						From North America, cultivated on North & South America, Europe, Asia
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<div>
						Add additional comments
					</div>
					<div>
						<textarea class="w-full p-2 border-2 no-resize" placeholder="Where do you find it? How does it look? What do you feel?" rows="2" />
					</div>
					<div class="flex">
						<a on:click={() => isShowSuccess = true} class="cursor-pointer w-full text-lg text-center py-2 px-4 bg-green-500 text-white">
							Submit
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>