import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetAllStaffMembersComponent } from '../pages/get-all-staff-members/get-all-staff-members.component';
import { GetAllServicesComponent } from '../pages/get-all-services/get-all-services.component';
import { GetAllAppointmentsComponent } from '../pages/get-all-appointments/get-all-appointments.component';
import { MetricsComponent } from '../pages/metrics/metrics.component';
import { GetAllClientsComponent } from '../pages/get-all-clients/get-all-clients.component';

const routes: Routes = [
  { path: 'metrics', component: MetricsComponent },
  { path: 'getStaff', component: GetAllStaffMembersComponent },
  { path: 'getClients', component: GetAllClientsComponent },
  { path: 'getServices', component: GetAllServicesComponent },
  { path: 'getAppointments', component: GetAllAppointmentsComponent },
  { path: '', redirectTo: 'metrics', pathMatch: 'full' }, // default dashboard page
  { path: '**', redirectTo: 'metrics' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
