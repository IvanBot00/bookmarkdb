import type { RequestHandler } from "./$types";
import db from '$lib/db/db'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
  const bookmarks = db.getBookmarks()
  return json(bookmarks)
}

