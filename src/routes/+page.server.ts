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
    const url = data.get('url')?.toString()

    if (!url)
      return invalid(303)

    db.addBookmark(url)
  }
}