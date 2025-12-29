import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../../common/enums/rol.enum';
import { RequestWithUser } from '../interfaces/request-with-user.interface';

@Injectable()
export class RolGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<number[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();

    const { user } = request;

    if (!user || !Array.isArray(user.roles)) {
      return false;
    }

    // 🔥 Superadmin pasa siempre
    if (user.roles.includes(Role.Superadmin)) {
      return true;
    }

    // 🔥 Intersección de roles
    return user.roles.some((rol) => requiredRoles.includes(rol));
  }
}
