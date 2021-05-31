const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.static('assests'));
// app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('layout', {
        title: "xyz"
    });

})

app.listen(port, () => {
    console.log(`our app listening at http://localhost:${port}`)
})