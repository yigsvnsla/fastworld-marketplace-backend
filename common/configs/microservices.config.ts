import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { ClientPattern } from "common/enum/clients-pattern.enum";

export const AUTH_CLIENT_PROVIDER: ClientProviderOptions = {
  name: `${ClientPattern.AUTH_SERVICE}`,
  transport: Transport.TCP,
  options:{
    port:ClientPattern.AUTH_SERVICE
  }
}

export const USER_CLIENT_PROVIDER: ClientProviderOptions = {
  name: `${ClientPattern.USER_SERVICE}`,
  transport: Transport.TCP,
  options:{
    port:ClientPattern.USER_SERVICE
  }
}

