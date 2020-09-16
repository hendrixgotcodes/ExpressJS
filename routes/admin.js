const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];


router.get("/add-product.html", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'html', 'add-product.html'));
});

// router.get('add-product',(req, res)=>{
//     res.status(302).redirect('')
// })

router.post("/add-product.html", (req, res, next) => {
    // console.log(req.body);
    products.push({
        title: req.body.productTitle,
        id: req.body.productId
    });
    res.redirect("/shop.html");
});

module.exports.routes = router;
module.exports.products = products;