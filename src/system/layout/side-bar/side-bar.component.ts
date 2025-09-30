import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserRoleDirective } from '../../security/directives/user-role.directive';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UserRoleDirective],
  template: `
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px; height: 100vh;">
      <a routerLink="/" class="d-flex align-items-center fs-4 mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="me-2">💇‍♂️</span>
        Salon<span style="color: red;">Zero</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a routerLink="/dashboard/metrics" routerLinkActive="active" class="nav-link text-white">
            <i class="bi bi-speedometer2 me-2"></i> Metrics
          </a>
        </li>
        <ng-container *appUserRole="['Admin']">

        <li class="nav-item">
          <a routerLink="/dashboard/getStaff" routerLinkActive="active" class="nav-link text-white">
            <i class="bi bi-people me-2"></i> Staff Members
          </a>
        </li>
        </ng-container>
        <ng-container *appUserRole="['Admin']">
        <li class="nav-item">
          <a routerLink="/dashboard/getClients" routerLinkActive="active" class="nav-link text-white">
            <i class="bi bi-people me-2"></i> Our Clients
          </a>
        </li>
        </ng-container>
        <li class="nav-item">
          <a routerLink="/dashboard/getServices" routerLinkActive="active" class="nav-link text-white">
            <i class="bi bi-person-bounding-box me-2"></i> Our Services
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/dashboard/getAppointments" routerLinkActive="active" class="nav-link text-white">
            <i class="bi bi-alarm me-2"></i> Appointments
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  
}
