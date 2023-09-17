<script lang="ts">
  import { enhance } from '$app/forms'
  export let form
</script>

<div class="flex flex-col h-screen p-4">
  <div class="mb-8">
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>

  <div class="flex flex-row items-center justify-center gap-2 mb-8">
    <div class="rounded-full w-8 h-8 bg-green-200 text-green-900 flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="text-3xl font-bold text-neutral-800">
      GREENY
    </div>
  </div>

  <!-- <form class="space-y-6" action="#" method="POST" use:enhance> -->
  <form class="space-y-6" action="/mission-board?/demo" method="POST">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-neutral-800">Name</label>
      <div class="mt-2">
        <input id="name" name="name" type="text" value={form?.name ?? ''} required class="block w-full rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-neutral-800">Email address</label>
      <div class="mt-2">
        <input id="email" name="email" type="email" autocomplete="email" value={form?.email ?? ''} required class="block w-full rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-neutral-800">Password</label>
      </div>
      <div class="mt-2">
        <input id="password" name="password" type="password" value={form?.email ?? ''} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 px-2 text-sm font-semibold leading-6 text-neutral-200 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Sign up</button>
    </div>
  </form>
</div>