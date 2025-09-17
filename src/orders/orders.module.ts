import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientProviderOptions, ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';

const clientProviderOptions: ClientProviderOptions[] = [
  {
    name: NATS_SERVICE,
    transport: Transport.NATS,
    options: {
      // host: envs.ordersService.host,
      // port: envs.ordersService.port
    }
  }
];

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register(clientProviderOptions),
  ]
})
export class OrdersModule { }
