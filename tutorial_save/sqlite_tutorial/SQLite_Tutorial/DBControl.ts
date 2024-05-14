
// DBControl.ts
import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./mydb.sqlite3', (err:any) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});
const initDB = () =>{
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL
    )`);
}



// 비동기 쿼리문 만들기
import { promisify } from 'util';
const runQuery = promisify((query:any, params:any, callback:any) => {
    db.all(query, params, callback);
});


export {db, runQuery, initDB};