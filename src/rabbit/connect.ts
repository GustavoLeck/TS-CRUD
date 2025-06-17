import amqp from "amqplib";
import { Converters } from "../helpers/converters";

// Extends the globalThis type to include rabbitChannel
declare global {
  var rabbitChannel: amqp.Channel;
}
export class RabbitMq {
  channel!: amqp.Channel;
  queues: Array<string> = [];
  constructor(queues: Array<string> = []) {
    this.queues = queues;
  }
  async connect() {
    try {
      const { RABBITMQ_USER, RABBITMQ_PASSWORD, RABBITMQ_HOST, RABBITMQ_PORT } =
        process.env;
      const rabbitMqUrl: string = `amqp://${RABBITMQ_USER}:${RABBITMQ_PASSWORD}@${RABBITMQ_HOST}:${RABBITMQ_PORT}/`;
      const connection = await amqp.connect(rabbitMqUrl);
      this.channel = await connection.createChannel();
      console.log("RabbitMQ conectado");
      this.channel.assertExchange(
        process.env.RABBIT_EXCHANGE_NAME || ("RabbitMq_Exchange" as string),
        process.env.RABBIT_EXCHANGE_TYPE || ("direct" as string),
        { durable: true }
      );
      this.channel.prefetch(
        new Converters().StringToNumber(
          process.env.RABBIT_MAX_REQUESTS as string
        )
      );
      globalThis.rabbitChannel = this.channel as amqp.Channel;
      console.log(
        ` => Exchange '${
          process.env.RABBIT_EXCHANGE_NAME || "RabbitMq_Exchange"
        }' criado com sucesso`
      );
    } catch (err) {
      console.error("Erro ao conectar com o RabbitMQ");
      return;
    }
    await this.createQueues();
    console.log(" => Filas criadas no RabbitMQ com sucesso");
  }
  async disconnect() {
    try {
      if (this.channel != null) {
        await this.channel.close();
        console.log("Canal RabbitMQ fechado");
      }
    } catch (err) {
      console.error("Erro ao fechar o canal RabbitMQ:", err);
    }
  }
  async createQueues() {
    if (!this.channel) {
      console.error("Canal RabbitMQ não está conectado");
      return;
    }
    for (const queue of this.queues) {
      try {
        await this.channel.assertQueue(queue, { durable: true });
        await this.channel.bindQueue(
          queue,
          process.env.RABBIT_EXCHANGE_NAME || ("RabbitMq_Exchange" as string),
          queue
        );
        console.log(` > Fila '${queue}' criada com sucesso`);
      } catch (error) {
        console.error(`Erro ao criar a fila ${queue}:`, error);
        continue;
      }
    }
  }
  getQueues(): Array<string> {
    return this.queues;
  }
  getChannel(): amqp.Channel {
    return this.channel;
  }
}
