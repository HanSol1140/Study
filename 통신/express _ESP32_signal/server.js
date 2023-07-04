const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors()); // 모든 도메인에서의 요청 허용
app.use(express.static('public'));
app.use(express.json());
// 8083/send로 접속하면 해당 명렁어 실행

// const response = await axios.post(`http://1.212.172.134:8082/?id=${req.body.id}&pass=${req.body.pass}&callbackurl=${req.body.callbackurl}&callbackhost=${req.body.callbackhost}&callbackport=${req.body.callbackport}`);
app.get('/send', async function (req, res) {
    try {
        const response = await axios.get(`http://1.212.172.134:8082/nanonix.html?sender=01031277711`);
            console.log("전송완료");
        if (response.status === 200) {
            console.log(response.data);
        }
      } catch (error) {
        console.error('Error with API call:', error);
        res.send("error");  
      }
});



app.listen(8084, function () {
  console.log('포트 8084 서버실행 완료');
});