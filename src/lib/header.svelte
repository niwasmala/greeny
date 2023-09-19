<script>
	export let title, subtitle
</script>

<div class="flex flex-row justify-between items-center">
	<div class="py-6 mb-2">
		<div class="text-4xl text-neutral-800">
			{title ?? ''}
		</div>
		<div class="text-sm text-neutral-600 font-regular">
			{subtitle ?? ''}
		</div>
	</div>

	<a href="/reward" class="flex flex-row py-3 px-5 gap-2 bg-green-200 text-neutral-800 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
		</svg>

		<div>
			300
		</div>
	</a>
</div>