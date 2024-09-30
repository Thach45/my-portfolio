const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Thiết lập Pug làm template engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Route to render the main page
app.get('/', (req, res) => {
    res.render("./index")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});