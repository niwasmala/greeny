<script>
	import { onMount } from 'svelte'

	let mode = 'image'
	let imageCapture, videoCapture, audioCapture
	let captureButton, canvas

	const constraints = {
	  video: {
	    width: {
	      min: 360,
	      ideal: 1920,
	      max: 2560,
	    },
	    height: {
	      min: 360,
	      ideal: 1080,
	      max: 1440
	    },
	  }
	}

	const requestCamera = async () => {
		if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
		  navigator.mediaDevices.getUserMedia({video: true})

		  const devices = await navigator.mediaDevices.enumerateDevices()
		  
		  const videoDevices = devices.filter(device => device.kind === 'videoinput')
		  
		  if (videoDevices.length > 0) {
			  const updatedConstraints = {
	      	...constraints,
		      deviceId: {
		        exact: videoDevices?.[0]
		      }
		    }

		    startStream(updatedConstraints)
		  }
		}
	}

	const startStream = async (constraints) => {
	  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  	handleStream(stream)
	}

	const handleStream = (stream) => {
	  videoCapture.srcObject = stream
	  streamStarted = true
	}

	const doScreenshot = () => {
	  canvas.width = video.videoWidth
	  canvas.height = video.videoHeight
	  canvas.getContext('2d').drawImage(video, 0, 0)
	  screenshotImage.src = canvas.toDataURL('image/webp')
	  screenshotImage.classList.remove('d-none')
	}

	onMount(() => {
		requestCamera()
	})
</script>

<div class="max-w-screen sm:max-w-lg w-full sm:mx-auto fixed z-30 flex flex-col p-4">
	<a href="" class="w-14 flex bg-white p-4 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	</a>
</div>

<!-- <div class="max-w-screen sm:max-w-lg w-full sm:mx-auto fixed z-20 w-screen h-screen flex items-center justify-center">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-72 h-72 text-neutral-100">
	  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
	</svg>
</div> -->

{#if mode === 'image'}
	<video bind:this={videoCapture} autoplay class="max-w-screen sm:max-w-lg w-full h-screen sm:mx-auto fixed z-30 "></video>
  <canvas bind:this={canvas} class="fixed z-10 w-screen h-screen"></canvas>
  <img bind:this={imageCapture} class="fixed z-10 w-screen h-screen" alt="" />
{/if}
{#if mode === 'video'}
	<div bind:this={videoCapture} class="fixed z-10 w-screen h-screen"></div>
{/if}
{#if mode === 'audio'}
	<div bind:this={audioCapture} class="fixed z-10 w-screen h-screen"></div>
{/if}

<!-- <div class="max-w-screen sm:max-w-lg w-full sm:mx-auto fixed z-0 w-screen h-screen bg-cover" style="background-image: url('/missions/kawah-putih.jpg')"></div> -->

<div class="max-w-screen sm:max-w-lg w-full sm:mx-auto fixed z-30 bottom-2 sm:bottom-5 px-0 sm:px-4 flex flex-col justify-center items-center gap-4">
	<div class="flex flex-row gap-4">
		<div on:click={() => mode = 'image'} class={`cursor-pointer w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${mode === 'image' ? 'bg-green-500 text-white' : 'bg-neutral-200'}`}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
			  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
			</svg>
		</div>
		<div on:click={() => mode = 'video'} class={`cursor-pointer w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${mode === 'video' ? 'bg-green-500 text-white' : 'bg-neutral-200'}`}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
			</svg>
		</div>
		<div on:click={() => mode = 'audio'} class={`cursor-pointer w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${mode === 'audio' ? 'bg-green-500 text-white' : 'bg-neutral-200'}`}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
			</svg>
		</div>
	</div>
	<a href="/capture/preview" class="w-48 py-4 px-2 text-center bg-green-500 text-white rounded-2xl">
		Capture
	</a>
</div>