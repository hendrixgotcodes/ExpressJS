const requestHandler = (res, req)=> {

    const fs = require("fs");
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<header>");
        res.write("<title>Input Data</title>");
        res.write("</header>");
        res.write(
            "<body><form method='POST'><input type='text' name='message'><button>Submit</button></form></body>"
        );
        res.write("</html>");
        res.end();
    } else if (url === '/test' && method === "POST") {
        console.log(true);
        const data = [];
        req.on("data", chunk => {
            data.push(chunk);
            console.log(chunk);
        });
        req.on("end", () => {
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
            fs.writeFileSync("message.txt", parsedData);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/test");


        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<header>");
        res.write("<title>Redirected</title>");
        res.write("</header>");
        res.write(
            "<body><h1>You were redirected here</h1></body>"
        );
        res.write("</html>");
        res.end();
    }

    console.log(method);
}

module.exports = requestHandler;