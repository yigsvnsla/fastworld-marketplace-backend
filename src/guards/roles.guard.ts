import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLE_ENUM } from '../const/role.const';
import { ROLES_KEY } from '../decorators/role.decorator';
import User from '../app/users/entitys/user.entity';

@Injectable()
export default class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<ROLE_ENUM[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { user }: { user: User } = context.switchToHttp().getRequest();
    const hasRole = () => requiredRoles.some((role) => user.role.type == role);
    return user && user.role && hasRole();
  }
}
