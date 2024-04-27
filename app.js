require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const app = express();
const PORT = 5000 || process.env.PORT;


app.use(express.static('public'));

// Template engine
app.set(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
})