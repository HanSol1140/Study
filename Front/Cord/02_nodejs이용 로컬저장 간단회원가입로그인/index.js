const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let db = new sqlite3.Database(':memory:');
let db = new sqlite3.Database('mydatabase.db');

db.run('CREATE TABLE IF NOT EXISTS users(username TEXT, password TEXT)');
/**
    위의 코드는 mydatabase.db 파일을 읽거나 존재하지 않는 경우 새로 생성하여 연결합니다.
    이를 위해 SQL 쿼리에서 CREATE TABLE IF NOT EXISTS 문을 사용할 수 있습니다.
    이 문은 테이블이 존재하지 않을 경우에만 테이블을 생성합니다.
**/

app.get('/', (req, res) => {
    res.redirect('/login.html');
});


app.post('/register', (req, res) => {
    const {username, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);
    db.run('INSERT INTO users(username, password) VALUES(?, ?)', [username, hash], (err) => {
        if(err) {
            res.status(500).send({message: '회원가입에 실패했습니다.'});
        } else {
            res.status(200).send({message: '회원가입이 완료되었습니다.'});
        }
    });
});



app.post('/login', (req, res) => {
    const {username, password} = req.body;
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if(err) {
            res.status(500).send({message: '로그인에 실패했습니다.'});
        } else if (!row || !bcrypt.compareSync(password, row.password)) {
            res.status(401).send({message: '잘못된 사용자 이름 또는 비밀번호입니다.'});
        } else {
            res.status(200).send({message: '로그인에 성공했습니다.'});
        }
    });
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});