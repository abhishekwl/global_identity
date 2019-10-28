require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
//LOCAL
const { respond } = require('./util');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (request, response) => respond(null, { 'message': 'All requests should be directed to /api/v1 endpoint' }, request, response));
app.listen(process.env.SERVER_PORT, '0.0.0.0', () => console.log('[SERVER] Running on port '+process.env.SERVER_PORT));
