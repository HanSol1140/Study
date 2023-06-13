// server.js
const express = require('express');
const cors = require('cors');  // import the 'cors' module
const app = express();
const port = 5000;

app.use(cors());  // use cors middleware

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});