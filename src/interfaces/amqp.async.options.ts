import { AmqpOptionsInterface } from './amqp.options';

export interface AmqpAsyncOptionsInterface {
  inject?: any[];
  useFactory?: (...args: any[]) => Promise<AmqpOptionsInterface>;
  retrys?: number;
  retryDelay?: number;
}
