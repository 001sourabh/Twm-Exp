const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    return res.render('homepage');

})

app.listen(port, () => {
    console.log(`our app listening at http://localhost:${port}`)
})