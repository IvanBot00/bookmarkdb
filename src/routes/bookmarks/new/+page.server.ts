import { invalid, redirect, type Actions } from '@sveltejs/kit'
import db from '$lib/db/db'

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    if (!title)
      return invalid(404, { missing: { title: true } })
    if (!url)
    return invalid(404, { missing: { url: true } })

    db.addBookmark(title, url)
    throw redirect(303, "/")
  }
}
