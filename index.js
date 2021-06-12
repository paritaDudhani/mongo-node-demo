const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./Middleware/dbConnection');

const taskRoutes = require('./Routes/task.routes');
const subtaskRoutes = require('./Routes/subtask.routes');

app.use(bodyParser.json());

app.use('/task', taskRoutes);
app.use('/subtask', subtaskRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('App listening on port: ', port);
});
