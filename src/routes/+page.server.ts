import db from '$lib/db/db'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  const bookmarks = db.getBookmarks()
  return {
    bookmarks: bookmarks
  }
}

