const path = require('path');
const express = require('express');
const router = express.Router();


router.get("/add-product.html", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'html', 'add-product.html'));
});

// router.get('add-product',(req, res)=>{
//     res.status(302).redirect('')
// })

router.post("/submit", (req, res, next) => {
    console.log(req.body);
    res.redirect("/shop.html");
});

module.exports = router;