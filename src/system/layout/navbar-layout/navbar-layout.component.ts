import { Component } from '@angular/core';
import { AccountService } from '../../account/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!-- Navbar brand or logo -->
        <a class="navbar-brand" href="#">Dashboard</a>
        <ng-container *ngIf="accountService.user$ | async as user">
          <!-- Right side actions -->
          <div class="d-flex align-items-center">
            <!-- Bell icon -->
            <i
              class="bi bi-bell text-white fs-4 me-3"
              role="button"
              aria-label="Notifications"
            ></i>

            <!-- First name -->
            <span class="text-white me-3">Hi, {{ user.firstName }}</span>
            <div class="dropdown">
              <a
                class="d-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle bg-primary"
                style="width: 40px; height: 40px; font-weight: bold; font-size: 1rem;"
                href="#"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ getInitials(user.firstName, user.lastName) }}
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end text-small shadow"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a class="dropdown-item" routerLink="/profile">Profile</a>
                </li>
                <li>
                  <a class="dropdown-item" routerLink="/settings">Settings</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a
                    class="dropdown-item"
                    style="cursor:pointer"
                    (click)="logout()"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </ng-container>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar-layout.component.css'],
})
export class NavbarLayoutComponent {
  constructor(public accountService: AccountService, private router: Router) {}

  getInitials(firstName: string, lastName: string): string {
    const firstInitial = firstName ? firstName[0].toUpperCase() : '';
    const lastInitial = lastName ? lastName[0].toUpperCase() : '';
    return firstInitial + lastInitial;
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/account/signIn']);
  }
}
