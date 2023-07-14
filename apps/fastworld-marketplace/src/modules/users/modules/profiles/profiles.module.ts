import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports: [ProfilesService],
})
export class ProfilesModule {}
