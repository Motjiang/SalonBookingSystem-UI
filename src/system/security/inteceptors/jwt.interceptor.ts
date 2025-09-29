import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../../account/account.service';
import { inject } from '@angular/core';
import { switchMap, take } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);

  // Skip login/register requests
  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }

  return accountService.user$.pipe(
    take(1),
    switchMap((user) => {
      if (user) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });
      }
      return next(req);
    })
  );
};
