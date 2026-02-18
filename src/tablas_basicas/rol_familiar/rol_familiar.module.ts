import { Module } from '@nestjs/common';
import { RolFamiliarService } from './rol_familiar.service';
import { RolFamiliarController } from './rol_familiar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolFamiliar } from './entities/rol_familiar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolFamiliar])],
  controllers: [RolFamiliarController],
  providers: [RolFamiliarService],
})
export class RolFamiliarModule {}
