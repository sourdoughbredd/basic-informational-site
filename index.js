import { readFile, readFileSync } from "fs";
import http from "http";

// Setup server host
const port = 8080;
const hostname = "localhost";

// Load the error page
let error404;
try {
  error404 = readFileSync("./404.html");
} catch (e) {
  error404 = "Error 404. Requested page could not be found.";
}

// Create the server
const server = http.createServer((req, res) => {
  // Determine the file to serve based on the URL
  let filePath = "";
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact-me":
      filePath = "contact-me.html";
      break;
    default:
      filePath = "404.html";
      res.statusCode = 404;
      break;
  }

  // Read and serve
  const fullpath = "./" + filePath;
  readFile(fullpath, (err, data) => {
    if (err) {
      res.end(error404);
    } else {
      res.end(data);
    }
  });
});

// Start server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
