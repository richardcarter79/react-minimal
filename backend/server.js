const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();

const port = 8080;

app.use(cors());
app.use(express.static('dist'));

/* app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
}); */

app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username });
});

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
