import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Status from "./routes/status-route";
import User from "./routes/user/user-route";
import { RabbitMq } from "./rabbit/connect";
import { RabbitConsumer } from "./rabbit/consumer";
import { IRabbitMq } from "./interfaces/rabbimq.interface";
import { BooleanConverter } from "./helpers/boolean-converter";

const server = express();
dotenv.config();
server.use(bodyParser.json());
server.use("/api", Status);
server.use("/api", User);
server.listen(process.env.SERVICE_PORT || 5500, async () => {
  console.clear();
  if (
    new BooleanConverter().StringToBoolean(process.env.USE_RABBITMQ as string)
  ) {
    const Rabbit: IRabbitMq = new RabbitMq(["status"]);
    await Rabbit.connect();
    await new RabbitConsumer(Rabbit.channel).turnOn();
  }
  console.log(`--Server ON--`);
});
