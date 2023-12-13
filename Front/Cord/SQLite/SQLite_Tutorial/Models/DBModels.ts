// import db from '../DBControl.js';
// import { runQuery } from '../DBControl.js';
import { db, runQuery } from '../DBControl';

export const writeContacts_Model = (name:string, email:string) => {
    try {
        db.run(`INSERT INTO contacts (name, email) VALUES (?, ?)`, [name, email]);
        return { status: 200, name, email};
    } catch (error) {
        return { status:500, error }
    }
};


export const readContacts_Model = async () => {
    try {
        const rows = await runQuery(`SELECT * FROM contacts`, []);
        return { status: 200, data: rows };
    } catch (error) {
        return { status: 400, error };
    }
};


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