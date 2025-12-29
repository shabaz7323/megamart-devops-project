const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Auth service running");
}).listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
