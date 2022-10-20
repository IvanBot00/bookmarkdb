import Database from 'better-sqlite3'

class SQLiteDatabase {
  readonly db = new Database('bookmark.db')

  constructor() {
    console.log('DB: Constructing database')
    const sql = `CREATE TABLE IF NOT EXISTS bookmarks(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, 
      url TEXT
      );`
    
    this.db.exec(sql)
  }

  addBookmark(title: string, url: string) {
    const stmt = this.db.prepare(`INSERT INTO bookmarks (title, url) VALUES (?, ?)`)
    const info = stmt.run(title, url)
    console.log('DB: Add', info.changes)
  }

  getBookmarks() {
    const stmt = this.db.prepare('SELECT * FROM bookmarks')
    const bookmarks = stmt.all()
    return bookmarks
  }

  deleteBookmark(id: number) {
    const stmt = this.db.prepare('DELETE FROM bookmarks WHERE id = ?')
    const info = stmt.run(id)
    console.log('DB: Delete', info.changes)
  }

}

export default new SQLiteDatabase()