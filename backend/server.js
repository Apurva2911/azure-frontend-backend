const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "Hello from Backend 🚀",
      time: new Date().toISOString()
    }));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log("Backend running on port " + port);
});
