import http from "http";
const PORT = 3000;
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(req.method);
    console.log(url);
    
    if (url == "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
        res.end("Welcome to Cairo Metro Control — Line 3");
    }
    else if (req.url === "/next-train") {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });

        const nextTrain = new Date().toLocaleString();
        res.end(`Next train arrives at: ${nextTrain}`);
    }
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain",
        });
        res.end("Platform not found");
    }
});
server.listen(PORT, () => {
    console.log("Server Listening on : " + PORT);
});
