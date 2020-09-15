const express = require('express');
const router =  express.Router();

router.get("/index.html", (req, res, next) => {
    res.send("<h1>Welcome To HOMEPAGE</h1>");
  });

module.exports = router;