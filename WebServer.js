const http = require('http');
const port = 5000;
const server = http.createServer((req, res) => {
    console.log('A reqest sended');
    const url = req.url;

    if (url === "/index") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>WELCOME TO INDEX PAGE</h2>");
    } else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>WELCOME TO HAKKIMDA PAGE</h2>");
    } else if (url === "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>WELCOME TO ILETISIM PAGE</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 PAGE COULD NOT FOUND</h1>");
    }


    res.end();
});

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});