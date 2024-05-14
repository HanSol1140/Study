"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readContacts_Model = exports.writeContacts_Model = void 0;
// import db from '../DBControl.js';
// import { runQuery } from '../DBControl.js';
const DBControl_1 = require("../DBControl");
const writeContacts_Model = (name, email) => {
    try {
        DBControl_1.db.run(`INSERT INTO contacts (name, email) VALUES (?, ?)`, [name, email]);
        return { status: 200, name, email };
    }
    catch (error) {
        return { status: 500, error };
    }
};
exports.writeContacts_Model = writeContacts_Model;
const readContacts_Model = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield (0, DBControl_1.runQuery)(`SELECT * FROM contacts`, []);
        return { status: 200, data: rows };
    }
    catch (error) {
        return { status: 400, error };
    }
});
exports.readContacts_Model = readContacts_Model;
// export const readContacts_Model = (): Promise<{ status: number; data?: any; error?: string }> => {
//     return new Promise((resolve, reject) => {
//         const rows = db.all(`SELECT * FROM contacts`, [], (err, rows) => {
//             if (err) {
//                 reject({ status: 400, error: err.message });
//             } else {
//                 resolve({ status: 200, data: rows });
//             }
//         });
//     });
// };
