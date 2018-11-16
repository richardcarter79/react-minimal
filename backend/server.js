const express = require('express');
// const path = require('path');
const os = require('os');

const app = express();


const port = 8080;
//  middleware to define folder for static files
app.use(express.static('dist'));

/* app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
}); */

app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
