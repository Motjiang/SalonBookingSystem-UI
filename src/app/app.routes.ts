import { Routes } from '@angular/router';
import { HomeComponent } from '../landing page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'account', loadChildren: () => import('../system/account/account.module').then((module) => module.AccountModule)
  }
];
