const express = require('express');
const cors = require('cors');
const routes = require('./rotes');

const app = express();
/* a linha abaixo informa ao express que precisará convertera request do formato JSON para um objeto JavaScript */
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);