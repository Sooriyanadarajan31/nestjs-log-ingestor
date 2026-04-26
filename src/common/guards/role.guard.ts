import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Role } from '../enums/role-enum';

@Injectable()
export class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const role = request.headers['role'];
        if (role !== Role.ADMIN) {
            throw new ForbiddenException('Access denied');
        }
        // Only admin can search
        return role === 'admin';
    }
}