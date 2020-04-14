const express = require('express');
const routers = require('./router');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);


app.listen(3333);