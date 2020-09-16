const path = require('path');
const express = require('express');
const router =  express.Router();

router.get("/shop.html", (req, res, next) => {
    res.sendFile(path.join(__dirname,  '../','views', 'html', 'shop.html'));
  });

router.get('/',(req, res)=>{
  res.status(302).redirect('/shop.html');
})

module.exports = router;