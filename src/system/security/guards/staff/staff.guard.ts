import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../../../account/account.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { inject } from '@angular/core';
import { User } from '../../../shared/models/user';
import { map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export const staffGuard: CanActivateFn = (route, state) => {
const accountService = inject(AccountService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);

  return accountService.user$.pipe(
    map((user: User | null) => {
      if (user) {
        const decodedToken: any = jwtDecode(user.jwt);

        // Normalize roles to array
        let userRoles = decodedToken.role;
        if (typeof userRoles === 'string') {
          userRoles = [userRoles];
        }

        // Allowed roles
        const allowedRoles = ['Administrator', 'Staff'];

        if (
          Array.isArray(userRoles) &&
          userRoles.some(role => allowedRoles.includes(role))
        ) {
          return true; // ✅ user is allowed
        }
      }

      // Not authorized
      notificationService.showNotification(false, 'Restricted Area', 'Leave now!');
      router.navigateByUrl('/');
      return false;
    })
  );
};
