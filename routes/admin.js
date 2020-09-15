const express = require('express');
const router = express.Router();

router.get("/login.html", (req, res, next) => {
    res.send(
        "<form action='/' method='POST'><input type='text' name='title'><button>Submit</button></form>"
    );
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    res.redirect("/index.html");
});

module.exports = router;