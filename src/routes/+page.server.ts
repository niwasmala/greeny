// src/routes/+page.server.ts
import { redirect, fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession()

  // if the user is already logged in return them to the dashboard page
  /*if (session) {
    throw redirect(303, '/missions')
  }*/

  return { url: url.origin }
}
