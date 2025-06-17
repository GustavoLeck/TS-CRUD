import amqp from "amqplib";
export interface IRabbitMq {
  channel: amqp.Channel;
  queues: Array<string>;
  connect(): Promise<void>;
  getChannel(): amqp.Channel;
}
