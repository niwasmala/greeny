<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-24">
	<Header title="Community" subtitle="Connect, Share, Thrive, Together" />

	<div class="flex flex-col gap-4">
	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Top Explorers on Your Area
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="flex flex-row justify-between pb-4">
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 bg-green-200 rounded-full"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 bg-green-200 rounded-full"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 bg-green-200 rounded-full"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 bg-green-200 rounded-full"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 bg-green-200 rounded-full"></div>
	  	</div>
	  </div>

	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Inspiring Stories
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="max-w-lg">
		    <div class="flex gap-2 overflow-x-auto pb-4">
		  		<div class="flex-none w-32 h-44 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-32 h-44 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-32 h-44 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-32 h-44 bg-green-200 rounded-md"></div>
		  	</div>
	  	</div>
	  </div>

	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Events Near You
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="max-w-lg">
		    <div class="flex gap-2 overflow-x-auto pb-4">
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md"></div>
		  	</div>
	  	</div>
	  </div>
	</div>
</div>

<Footer active="community" />