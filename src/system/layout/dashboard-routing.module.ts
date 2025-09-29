import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetAllStaffMembersComponent } from '../pages/get-all-staff-members/get-all-staff-members.component';
import { GetAllServicesComponent } from '../pages/get-all-services/get-all-services.component';
import { GetAllAppointmentsComponent } from '../pages/get-all-appointments/get-all-appointments.component';

const routes: Routes = [
  { path: 'home', component: GetAllStaffMembersComponent },
  { path: 'getMembers', component: GetAllStaffMembersComponent },
  { path: 'getServices', component: GetAllServicesComponent },
  { path: 'getAppointments', component: GetAllAppointmentsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default dashboard page
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
