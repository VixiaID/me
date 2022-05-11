const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('index', {
    name: process.env.NAME,
    desc: process.env.DESC,
    github: process.env.GITHUB,
    telegram: process.env.TELEGRAM,
    mail: process.env.EMAIL
  });
});

app.get('*', (req, res) => {
  res.status(404).render('404', {
    name: process.env.NAME
  });
});

const server = app.listen(8080, () => {
  console.log(`Server is listening on ${server.address().port}`);
});
