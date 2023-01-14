import http from "node:http";

const { PORT = "3333" } = process.env;

const server = http.createServer((req, res) => {
  return res.end("Hello World!");
});

server.listen(+PORT);
