import db from '$lib/db/db'
import { invalid, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  const bookmarks = db.getBookmarks()
  return {
    bookmarks: bookmarks
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    if (!url || !title)
      return invalid(404, { missing: true} )

    db.addBookmark(title, url)
  }
}