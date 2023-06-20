// server1.js
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8090;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.redirect('/.html');
});


app.post("/Apitest", (req, res) => {
    const receivedData = req.body;
    
    const id = req.body.id;
    const pass = req.body.pass;
    const destnumber = req.body.destnumber;
  
    if (
      receivedData.id === id &&
      receivedData.pass === pass &&
      receivedData.destnumber === destnumber
    ){
      res.send("수신완료!!");
    } else {
      res.status(400).send("잘못된 요청입니다.");
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});