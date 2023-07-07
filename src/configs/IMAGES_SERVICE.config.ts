import { ClientsModule, Transport } from "@nestjs/microservices"

export const IMAGES_SERVICE = {
  provide: 'IMAGES_SERVICE',
  useValue: {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3000,
    },
  },
}

export const IMAGES_SERVICE_CLIENT = ClientsModule.register([{
  name: 'IMAGES_SERVICE',
  transport: Transport.TCP,
  options: {
    // host: "localhost",
    port: 3000,
  },
}])