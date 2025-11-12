import http from 'node:http';

const server = http.createServer((req, res) => {
    res.end("Server is running...")

})

server.listen(8000 ,() => {

    console.log("Server is running on port 8000...");

})
