import amqp from "amqplib";
import { StatusController } from "../controllers/status-controller";

export class RabbitConsumer {
  channel: amqp.Channel;
  req: import("express").Request;
  res: import("express").Response;
  constructor(channel: amqp.Channel) {
    this.channel = channel;
    this.req = {
      body: {},
      get: () => undefined,
      header: () => undefined,
      accepts: () => false,
      acceptsCharsets: () => false,
      acceptsEncodings: () => false,
      acceptsLanguages: () => false,
      // Add other required properties/methods as needed
    } as unknown as import("express").Request;
    this.res = {
      send: () => false,
    } as unknown as import("express").Response;
  }
  async turnOn() {
    if (this.channel == null) {
      console.error("Canal RabbitMQ não está conectado");
      return;
    }
    await this.channel.consume("status", async (msg: any) => {
      if (msg !== null) {
        this.req.body = msg;
        await new StatusController().handle(this.req, this.res);
      }
      this.channel.ack(msg); //Exclui a mensagem da fila após o processamento
      console.log("Mensagem processada e confirmada");
    });
  }
}
