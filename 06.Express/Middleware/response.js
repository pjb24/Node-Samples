/**
 * 다양한 응답
 */

const express = require('express');
const app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000');
});

app.get('/download', (req, res) => {
   res.download('./resource.zip');
});

app.get('/json', (req, res) => {
   const data = {
      title:'JSON Response',
      message:'It Works Well!'
   }; 
   res.json(data);
});

app.get('/redirect', (req, res) => {
   res.redirect('http://google.com');
});

app.get('/error', (req, res) => {
   res.status(400);
   res.send({error:'Your Fault'});
});

app.get('/status', (req, res) => {
   res.sendStatus(404);
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/header', (req, res) => {
    res.append('name1', 'value1');
    res.append('name2', 'value2');
    res.end('Header Writing');
});