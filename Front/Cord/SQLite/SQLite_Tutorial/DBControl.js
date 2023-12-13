"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.runQuery = exports.db = void 0;
// DBControl.ts
const sqlite3_1 = __importDefault(require("sqlite3"));
let db = new sqlite3_1.default.Database('./mydb.sqlite3', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});
exports.db = db;
const initDB = () => {
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL
    )`);
};
exports.initDB = initDB;
// 비동기 쿼리문 만들기
const util_1 = require("util");
const runQuery = (0, util_1.promisify)((query, params, callback) => {
    db.all(query, params, callback);
});
exports.runQuery = runQuery;
