<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="p-4 flex flex-col pb-28">
	<Header title="Reward" subtitle="Where Every Milestone Shines" />

	<div class="flex flex-col gap-4">
	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Rewards Redeemed
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="max-w-lg">
		    <div class="flex gap-2 overflow-x-auto pb-4">
		    	<div class="flex-none w-48 h-24 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/starbucks.png')"></div>
		    	<div class="flex-none w-48 h-24 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/jaksport.jpg')"></div>
		    	<div class="flex-none w-48 h-24 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/eiger.jpg')"></div>
		    	<div class="flex-none w-48 h-24 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/pulsa.jpg')"></div>
		  	</div>
	  	</div>
	  </div>

	  <div class="flex flex-col gap-2">
	  	<div class="flex flex-row justify-between">
		  	<div class="text-sm">
		  		Available Rewards
		  	</div>
		  	<div class="text-sm">
		  		More
		  	</div>
	  	</div>

	  	<div class="flex flex-col gap-4 pb-4">
	  		<div class="w-full h-56 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/eiger.jpg')"></div>
	  		<div class="w-full h-56 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/jaksport.jpg')"></div>
	  		<div class="w-full h-56 bg-green-200 rounded-md bg-cover bg-no-repeat bg-center" style="background-image: url('/voucher/starbucks.png')"></div>
	  	</div>
	  </div>
	</div>
</div>

<Footer active="reward" />