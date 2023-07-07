import { Module } from "@nestjs/common";
import ImagesController from "./images.controller";
import ImagesService from "./images.service";
import { IMAGES_SERVICE, IMAGES_SERVICE_CLIENT } from "../../configs/IMAGES_SERVICE.config";


@Module({
  imports: [IMAGES_SERVICE_CLIENT],
  controllers: [ImagesController],
  providers: [ImagesService],//IMAGES_SERVICE
})
export class ImagesModule {}
