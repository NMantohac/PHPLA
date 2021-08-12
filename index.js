require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes');

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
