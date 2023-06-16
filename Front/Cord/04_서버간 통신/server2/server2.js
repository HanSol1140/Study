// server2.js
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 85;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/login.html');
});


app.post("/Apitest", (req, res) => {
    const receivedData = req.body;
    
    const id = '07040994350';
    const pass = '6195nix*';
    const desnumber = '01031277711';
  
    if (
      receivedData.id === id &&
      receivedData.pass === pass &&
      receivedData.destnumber === desnumber
    ){
      res.send("수신완료!!");

    } else {
      res.status(400).send("잘못된 요청입니다.");
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});