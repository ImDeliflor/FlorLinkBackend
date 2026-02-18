import { Module } from '@nestjs/common';
import { HijoService } from './hijo.service';
import { HijoController } from './hijo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hijo } from './entities/hijo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hijo])],
  controllers: [HijoController],
  providers: [HijoService],
})
export class HijoModule {}
