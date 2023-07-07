import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export default class ImagesService {
  constructor(@Inject('IMAGES_SERVICE') private client: ClientProxy) {}

  public async getHello(file: Express.Multer.File) {
    this.client.emit('hello', file);
    return 'oremos';
  }

  public async uploadImage(image: Express.Multer.File) {
    return this.client.emit('image_upload', image);
  }
}