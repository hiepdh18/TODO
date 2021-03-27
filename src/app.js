const express  = require('express');
const router = require('./router');
const allRoutes = require('express-list-endpoints');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/api', router);
const port = 3000;

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
    console.log(allRoutes(app));
});