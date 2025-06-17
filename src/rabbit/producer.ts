import amqp from "amqplib";

export class RabbitProducer {
  channel: amqp.Channel;
  constructor() {
    this.channel = globalThis.rabbitChannel;
  }
  async execute(queue: string, message: any) {
    if (this.channel.checkQueue(queue) === undefined) {
      console.error(`Queue ${queue}não existe`);
      return;
    }
    this.channel.publish(
      process.env.RABBIT_EXCHANGE_NAME || ("RabbitMq_Exchange" as string),
      queue,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
        contentType: "application/json",
      }
    );
  }
}
