let http = require("http");
const math = require('./math.js');

console.log(math.sum(2,2))
http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!!!!!!!!!!!!");
  })
  .listen(5000);