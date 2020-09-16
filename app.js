const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

//Error Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "html", "error.html"));
});


app.listen(3000);