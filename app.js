const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const cors = require('cors');
//const bodyParser = require('body-parser');
require('dotenv/config');

//app.use(bodyParser.json);
app.use(express.json());
app.use(cors());
//import routes
const postRoutes = require('./routes/posts');

//middle
//app.use(bodyParser.json);

app.use('/post', postRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Homepage1');
});

app.use('/post', postRoutes);

//db connection
mongoose.connect(process.env.MONGOHQ_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected')
);

//server
app.listen(port);