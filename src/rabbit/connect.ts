import amqp from "amqplib";
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
        await this.channel.assertQueue(queue);
        console.log(` -- Fila '${queue}' criada com sucesso`);
      } catch (error) {
        console.error(`Erro ao criar a fila ${queue}:`, error);
        continue;
      }
    }
  }
  getQueues(): Array<string> {
    return this.queues;
  }
}
