const express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');
const utils = require('./utils');

const employeesRoutes = require('./routes/employees');
const companyRoutes = require('./routes/companies');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(utils.accessControlAllowOrigin);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(db.middleware);

app.use('/employees', employeesRoutes(express));
app.use('/companies', companyRoutes(express));
app.listen(process.env.PORT, () => {
   console.log('App listening to port: ' + process.env.PORT);
});
