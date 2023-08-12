const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 2;
const feed = [
  {
    id: 1,
    photo: 'blub',
    board: '오늘 있었던 일 적기',
  },
];

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/feed', (req, res) => {
  res.json(feed);
});

app.post('/api/feed', (req, res) => {
  const { photo, board } = req.body;
  feed.push({
    id: id++,
    photo,
    board,
  });
  return res.send('success');
});

app.listen(4000, () => {
  console.log('server start!!');
});
