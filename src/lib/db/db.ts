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

}

export default new SQLiteDatabase()