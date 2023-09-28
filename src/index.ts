import express from "express";
import bodyParser from "body-parser";

import swaggerUi from "swagger-ui-express";
import swaggerJson from "./swagger.json";
import Status from "./routes/status-route";
import User from "./routes/user/user-route";

const server = express();

server.use(bodyParser.json());
server.use(`/doc`, swaggerUi.serve, swaggerUi.setup(swaggerJson));

server.use("/api", Status);
server.use("/api", User);

server.listen(5500, () => {
  console.clear();
  console.log(`--Server ON--`);
});
