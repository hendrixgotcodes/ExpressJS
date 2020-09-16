const path = require('path');
const express = require('express');
const router =  express.Router();
const products = require('./admin');

router.get("/shop.html", (req, res, next) => {
    console.log(products);
    res.sendFile(path.join(__dirname,  '../','views', 'html', 'shop.html'));
  });

router.get('/',(req, res)=>{
  res.status(302).redirect('/shop.html');
})

module.exports = router;