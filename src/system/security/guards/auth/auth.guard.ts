import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../../../account/account.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { map } from 'rxjs';
import { User } from '../../../shared/models/user';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);

  
  return accountService.user$.pipe(
    map((user: User | null) => {
      if (user) {
        return true;
      } else {
        notificationService.showNotification(
          false,
          'Restricted Area',
          'Leave immediately!'
        );
        router.navigate(['account/signIn'], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      }
    })
  );
};
