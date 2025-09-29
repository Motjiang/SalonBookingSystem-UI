import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../system/account/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand fw-bold" href="#">
          Salon<span style="color: red;">Zero</span>
        </a>

        <!-- Mobile toggle -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav links + login -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <ng-container *ngIf="accountService.user$ | async as user">
              <li class="nav-item">
                <a class="nav-link" routerLink="/dashboard"
                  >Dashboard</a
                >
              </li>
            </ng-container>
            <li class="nav-item">
              <a class="nav-link " href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <ng-container
            *ngIf="accountService.user$ | async as user; else showSignIn"
          >
            <!-- User is logged in: show SignOut -->
            <div class="d-flex align-items-center gap-2">
              <span class="me-2">Hi, {{ user.firstName }}</span>
              <button class="btn btn-outline-danger" (click)="logout()">
                SignOut <i class="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </ng-container>

          <ng-template #showSignIn>
            <!-- User is NOT logged in: show SignIn -->
            <div class="d-flex">
              <a class="btn btn-outline-info" routerLink="/account/signIn">
                SignIn <i class="bi bi-box-arrow-in-right"></i>
              </a>
            </div>
          </ng-template>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public accountService: AccountService) {}

  logout() {
    this.accountService.logout();
  }
}
