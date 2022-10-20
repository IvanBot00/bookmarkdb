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

    // possibly optimize by checknng for /favicon first, and if fails load page and check for icon
    // fetch icon
    // need to improve security of this as well
    const basePath = url.split('/')
    const iconPath = 'https://' + basePath[2] + '/favicon.ico'
    // const icon = await fetch(iconPath).then(res => res.text())

    db.addBookmark(title, url, iconPath)
  }
}
