import express from "express";
import Status from "./routes/status-route";
import User from "./routes/User/user-route";

const server = express();

server.use("/api", Status);
server.use("/api", User);

server.listen(5500, () => {
  console.clear();
  console.log(`--Server ON--`);
});
