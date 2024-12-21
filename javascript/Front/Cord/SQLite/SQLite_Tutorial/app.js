"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.js
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// express실행
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// DB초기화
const db = __importStar(require("./DBControl.js"));
db.initDB();
// 라우터
const DBRouters_js_1 = __importDefault(require("./Routers/DBRouters.js"));
app.use('/', DBRouters_js_1.default);
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
