const express = require('express');
const app = express();
const profile = require('./profile.json');

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('index', {
    authorName: profile.authorName,
    authorDesc: profile.authorDesc,
    githubName: profile.githubName,
    githubLink: profile.githubLink,
    telegramName: profile.telegramName,
    telegramLink: profile.telegramLink,
    authorMail: profile.authorMail
  });
});

app.get('*', (req, res) => {
  res.status(404).render('404', {
    authorName: profile.authorName
  });
});

const server = app.listen(8080, () => {
  console.log(`Server is listening on ${server.address().port}`);
});
