import { invalid, type Actions } from '@sveltejs/kit'
import db from '$lib/db/db'

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    console.log('yeet')

    if (!url)
      return invalid(404, { missingUrl: true })
    if (!title)
      return invalid(404, { missingTitle: true})

    console.log('yeet 2')

    // possibly optimize by checknng for /favicon first, and if fails load page and check for icon
    // fetch icon
    // need to improve security of this as well
    const basePath = url.split('/')
    const iconPath = 'https://' + basePath[2] + '/favicon.ico'
    // const icon = await fetch(iconPath).then(res => res.text())

    db.addBookmark(title, url, iconPath)
  }
}
