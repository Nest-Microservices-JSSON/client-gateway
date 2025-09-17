import { Module } from '@nestjs/common';
import { ClientProviderOptions, ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';

const clientProviderOptions: ClientProviderOptions[] = [
  {
    name: NATS_SERVICE,
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
    },
  },
];

@Module({
  imports: [ClientsModule.register(clientProviderOptions)],
  exports: [ClientsModule],
})
export class NatsModule {}
