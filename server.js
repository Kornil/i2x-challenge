const express = require('express');
const path = require('path');

const server = express();
server.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 8080;
server.listen(port);
