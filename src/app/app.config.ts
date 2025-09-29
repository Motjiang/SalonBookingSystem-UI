import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from '../system/security/inteceptors/jwt.interceptor';
import { AccountService } from '../system/account/account.service';

export function initApp(accountService: AccountService) {
  return () => accountService.initializeUser();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AccountService],
      multi: true,
    },
  ],
};
