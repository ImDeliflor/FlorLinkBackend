import { Module } from '@nestjs/common';
import { TipoDocumentoService } from './tipo_documento.service';
import { TipoDocumentoController } from './tipo_documento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipo_documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDocumento])],
  controllers: [TipoDocumentoController],
  providers: [TipoDocumentoService],
})
export class TipoDocumentoModule {}
