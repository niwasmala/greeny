<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-28">
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
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cover bg-no-repeat bg-center" style="background-image: url('/avatar/user1-128x128.jpg')"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cover bg-no-repeat bg-center" style="background-image: url('/avatar/user6-128x128.jpg')"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cover bg-no-repeat bg-center" style="background-image: url('/avatar/user7-128x128.jpg')"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cover bg-no-repeat bg-center" style="background-image: url('/avatar/user8-128x128.jpg')"></div>
	  		<div class="flex-none w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-cover bg-no-repeat bg-center" style="background-image: url('/avatar/user5-128x128.jpg')"></div>
	  	</div>
	  </div>

	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Inspiring Stories & Moments
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="max-w-lg">
		    <div class="flex gap-2 overflow-x-auto pb-4">
		  		<div class="flex-none w-32 h-44 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/mount-rinjani.jpg')"></div>
		  		<div class="flex-none w-32 h-44 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/mount-papandayan.jpg')"></div>
		  		<div class="flex-none w-32 h-44 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/kawah-putih.jpg')"></div>
		  		<div class="flex-none w-32 h-44 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/mount-rinjani.jpg')"></div>
		  		<div class="flex-none w-32 h-44 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/encyclopedia/mount-papandayan.jpg')"></div>
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
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/event/dog.jpg')"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/event/butterfly.jpg')"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/event/lion.jpg')"></div>
		  		<div class="flex-none w-44 h-24 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/event/bee.jpg')"></div>
		  	</div>
	  	</div>
	  </div>
	</div>
</div>

<Footer active="community" />