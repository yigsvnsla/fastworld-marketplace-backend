import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserDto } from 'common/dto/user/user.dto';
import { USER_ROLE } from 'common/enum/roles/user-role.enum';
import { ROLES_KEY } from 'decorators/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<USER_ROLE[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { user }: { user: UserDto } = context.switchToHttp().getRequest();
    const hasRole = () => requiredRoles.some((role) => user.role.type == role);
    return user && user.role && hasRole();
  }
}
