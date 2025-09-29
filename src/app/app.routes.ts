import { Routes } from '@angular/router';
import { HomeComponent } from '../landing page/home/home.component';
import { DashboardLayoutComponent } from '../system/layout/dashboard-layout/dashboard-layout.component';
import { authGuard } from '../system/security/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../system/account/account.module').then(
        (module) => module.AccountModule
      ),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../system/layout/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
    ],
  },
];
