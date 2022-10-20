import type { RequestHandler } from "./$types";
import db from '$lib/db/db'

export const DELETE: RequestHandler = ({ params }) => {
  const id = parseInt(params.id)
  // check for error in parsing int

  db.deleteBookmark(id)

  return new Response()
}