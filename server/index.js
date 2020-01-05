const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const books = require('./routes/api/books');

app.use('/api/books', books);
//PORT variable process.env.PORT if deployed to heroku, 5000 for local
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`));