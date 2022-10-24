import { invalid, type Actions } from '@sveltejs/kit'
import db from '$lib/db/db'

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    if (!url)
      return invalid(404, { missingUrl: true })
    if (!title)
      return invalid(404, { missingTitle: true})

    db.addBookmark(title, url)
  }
}
