import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World2!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    const createdEvent = new OrderCreatedEvent('123', userId, price);
    this.billingClient.emit('order_created', createdEvent);
  }
}
