import { invalid, redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import db from '$lib/db/db'

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params.id)
  const bookmark = db.getBookmarkById(id)

  return {
    bookmark
  }
}

export const actions: Actions = {
  default: async ({ request, params }) => {
    const id = parseInt(params.id)
    const form = await request.formData()
    const { title, url } = parseBookmarkForm(form)

    if (!title) {
      return invalid(400, { missing: { title: true } })
    }
    if (!url)
      return invalid(400, { missing: { url: true } })

    db.updateBookmark(id, title, url)
    throw redirect(303, "/")
  }
}
function parseBookmarkForm(form: FormData) {
  const title = form.get('title')?.toString()
  const url = form.get('url')?.toString()

  return {
    title,
    url
  }
}