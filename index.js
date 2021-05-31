const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assests'));
// app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('homepage');

})

app.listen(port, () => {
    console.log(`our app listening at http://localhost:${port}`)
})