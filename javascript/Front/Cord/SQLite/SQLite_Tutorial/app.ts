// app.js
import  express from 'express';
import cors from 'cors';
// express실행
const app = express();
app.use(express.json());
app.use(cors());

//서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DB초기화
import * as db from './DBControl.js';
db.initDB();

// 라우터
import DBRouters from './Routers/DBRouters.js';
app.use('/', DBRouters);



// app.post('/contacts', (req, res) => {
//     const { name, email } = req.body;
//     db.run(`INSERT INTO contacts (name, email) VALUES (?, ?)`, [name, email], function(err) {
//       if (err) {
//         res.status(400).json({ "error": err.message });
//         return;
//       }
//       res.json({ "message": "success", "id": this.lastID });
//     });
//   });

//   app.get('/contacts', (req, res) => {
//     db.all(`SELECT * FROM contacts`, [], (err, rows) => {
//       if (err) {
//         res.status(400).json({"error":err.message});
//         return;
//       }
//       res.json({ "message":"success", "data":rows });
//     });
//   });