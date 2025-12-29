import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '../../common/enums/rol.enum';
import { Roles } from './roles.decorator';
import { AuthGuard } from '../guard/auth.guard';
import { RolGuard } from '../guard/rol.guard';

export function Auth(...roles: Role[]) {
  return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolGuard));
}
