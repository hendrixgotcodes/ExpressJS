// const handler = require("./routes");

// const http = require("http");
// const server = http.createServer(handler);

// server.listen(3000);
// const http = require('http'),
//     fs = require('fs');

// function serveStaticFile(res, path, contentType, responseCode) {
//     if (!responseCode) responseCode = 200;
//     fs.readFile(__dirname + path, function (err, data) {
//         if (err) {
//             res.writeHead(500, {
//                 'Content-Type': 'text/plain'
//             });
//             res.end('500 - Internal Error');
//         } else {
//             res.writeHead(responseCode, {
//                 'Content-Type': contentType
//             });
//             res.end(data);
//         }
//     });
// }

// http.createServer(function (req, res) {
// normalize url by removing querystring, optional
// trailing slash, and making lowercase
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '')
//         .toLowerCase();
//     switch (path) {
//         case '':
//             serveStaticFile(res, '/index.html', 'text/html');
//             break;
//         case '/about.html':
//             serveStaticFile(res, '/about.html', 'text/html');
//             break;
//         case '/error.html':
//             serveStaticFile(res, '/public/img/logo.jpg',
//                 'image/jpeg');
//             break;
//         default:
//             serveStaticFile(res, '/error.html', 'text/html',
//                 404);
//             break;
//     }
// }).listen(3000);

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Error Page
app.use((req, res, next) => {
    res.status(404).send('<h1>Error! Page Not Found!</h1>');
});


app.listen(3000);