import { ClientProviderOptions, ClientsModule, Transport } from "@nestjs/microservices"

export const AUTH_SERVICE: ClientProviderOptions = {
  name: 'AUTH_SERVICE',
  transport: Transport.TCP,
  options: {
    // host: 'localhost',
    // port: 3100,
  },
}
