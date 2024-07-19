import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World3!';
  }
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log('Order created', orderCreatedEvent);
  }
}
