import { Controller, Post, Body } from '@nestjs/common';

import { CreateEvaluacionDesempenioDto } from './dto/create-evaluacion-desempenio.dto';
import { EvaluacionDesempenioService } from './evaluacion_desempenio.service';
import { EvaluacionDesempenio } from './evaluacion_desempenio.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.Admin, Role.AdminGH)
@Controller('evaluacion-desempenio')
export class EvaluacionDesempenioController {
  constructor(private readonly service: EvaluacionDesempenioService) {}

  @Post()
  create(
    @Body() createDto: CreateEvaluacionDesempenioDto,
  ): Promise<EvaluacionDesempenio> {
    return this.service.create(createDto);
  }
}
