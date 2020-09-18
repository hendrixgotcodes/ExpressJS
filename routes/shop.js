const path = require('path');
const express = require('express');
const router = express.Router();
const products = require('./admin');

router.get("/shop.html", (req, res, next) => {
  // const prods = 
  console.log(products);
  // console.log(
  //   `title: ${products.products.title}
  //       id: ${products.products[0].id}
  //     `
  // )
  // res.sendFile(path.join(__dirname,  '../','views', 'html', 'shop.html'));
  res.render('store', {
    prod: products.products
  });
});

router.get('/', (req, res) => {
  res.status(302).redirect('/shop.html');
})

module.exports = router;