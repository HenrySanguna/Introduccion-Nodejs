const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

console.log('MONGO', process.env.MONGO);

const routesV1 = require('./routes/v1');
// Exportacion global de la funcion info: var log = require('./modules/my-log');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

const PORT= process.env.PORT;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
