const express = require('express');
const favicon = require('express-favicon');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
    console.log('the secret path');
    return res.send('pong');
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log('listening...'));