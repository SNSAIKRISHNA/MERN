import http from "node:http";
import { getDataFromDB } from "./Database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destination = await getDataFromDB();
  if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destination));
  } else if (req.url.startsWith("/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredDestinations = destination.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase();
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(filteredDestinations));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
