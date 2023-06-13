// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// 여기서 전달한 값을 전송

app.post('/api/console', (req, res) => {
    const { inputValue } = req.body;
    console.log(inputValue);
    // console.log(response.data);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});