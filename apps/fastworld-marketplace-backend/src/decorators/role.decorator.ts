import { SetMetadata } from '@nestjs/common';
import { ROLE_ENUM } from '../const/role.const';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLE_ENUM[]) => SetMetadata(ROLES_KEY, roles);
