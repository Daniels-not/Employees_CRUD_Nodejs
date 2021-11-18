const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const creator = "Ramy"


// Because you're the type of developer who cares about this sort of thing!
app.enable('strict routing');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(('/'), require('./router/index'));

app.listen(PORT, () => {
    console.log(`Hello ${creator}-san`)
    console.log(`Server is running on http://localhost:${PORT}`);
})