import { Component } from '@angular/core';
import { AccountService } from '../../account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  template: `
    <main class="d-flex flex-nowrap">
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px; height: 100vh;">
    <a routerLink="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32" aria-hidden="true">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a routerLink="/" routerLinkActive="active" class="nav-link text-white">
          <i class="bi bi-house-door me-2"></i>
          Home
        </a>
      </li>
      <li>
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-link text-white">
          <i class="bi bi-speedometer2 me-2"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a routerLink="/orders" routerLinkActive="active" class="nav-link text-white">
          <i class="bi bi-table me-2"></i>
          Orders
        </a>
      </li>
      <li>
        <a routerLink="/products" routerLinkActive="active" class="nav-link text-white">
          <i class="bi bi-grid me-2"></i>
          Products
        </a>
      </li>
      <li>
        <a routerLink="/customers" routerLinkActive="active" class="nav-link text-white">
          <i class="bi bi-people me-2"></i>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>User</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" routerLink="/settings">Settings</a></li>
        <li><a class="dropdown-item" routerLink="/profile">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" (click)="logout()">Sign out</a></li>
      </ul>
    </div>
  </div>
</main>
  `,
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
 constructor(private accountService: AccountService, private router: Router) {}

  logout() {
    this.accountService.logout();
    this.router.navigate(['/account/signIn']);
  }
}
