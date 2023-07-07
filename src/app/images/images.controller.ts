import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import ImagesService from "./images.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('images')
export default class ImagesController {
  constructor(private imagesService : ImagesService) {}

  @Post('test')
  @UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
     destination: 'assets/media',
    }),
   }),
  )
  public async getHello(@UploadedFile() file: Express.Multer.File) {
    return await this.imagesService.getHello(file);
  }
  @Post()
  public async uploadImage(@UploadedFile() image: Express.Multer.File) {
    return await this.imagesService.uploadImage(image);
  }
}