import express from 'express';
import Status from "./routes/status-route";

const server = express();
server.use("/api", Status);
server.listen(5500, () => {
    console.clear();
    console.log(`--Server ON--`);
  });