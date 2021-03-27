const express  = require('express');
const router = require('./router');
const allRoutes = require('express-list-endpoints')

const app = express();
app.use('/api', router);
const port = 3000;

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
    console.log(allRoutes(app));
});