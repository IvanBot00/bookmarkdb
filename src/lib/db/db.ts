import Database from 'better-sqlite3'

class SQLiteDatabase {
  readonly db = new Database('bookmark.db', { verbose: console.log })

  constructor() {
    console.log('Constructing db')
    const sql = `CREATE TABLE IF NOT EXISTS bookmarks(
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      url TEXT
      );`
    
    this.db.exec(sql)
  }

  addBookmark(url: string) {
    const stmt = this.db.prepare(`INSERT INTO bookmarks (url) VALUES (?)`)
    const info = stmt.run(url)
    console.log(info.changes)
  }

  getBookmarks() {
    const stmt = this.db.prepare('SELECT * FROM bookmarks')
    const bookmarks = stmt.all()
    return bookmarks
  }

  deleteBookmark(id: number) {
    const stmt = this.db.prepare('DELETE FROM bookmarks WHERE id = ?')
    const info = stmt.run(id)
    console.log(info.changes)
  }

}

export default new SQLiteDatabase()