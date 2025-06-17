import { RabbitMq } from "../rabbit/connect";
import { RabbitProducer } from "../rabbit/producer";

export class StatusController {
  async handle(
    req: import("express").Request,
    res: import("express").Response
  ) {
    const loops: number = Math.floor(Math.random() * 1000);
    res.send({
      status: "OK",
    });
    return;
  }
}
