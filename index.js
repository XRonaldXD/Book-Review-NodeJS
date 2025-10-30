const express = require('express');
const app = express();
const port = require('./config/database').port;

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});