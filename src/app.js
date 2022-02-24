require('./config/env');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const package = require('../package.json');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

app.use(compression());

app.get('/', (req, res) => {
  const { name, version, description } = package;
  res.send({
    name,
    version,
    description
  });
});

app.use('/api/v1/', router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
