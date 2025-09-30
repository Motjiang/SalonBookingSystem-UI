import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLayoutComponent } from "../navbar-layout/navbar-layout.component";
import { FooterLayoutComponent } from "../footer-layout/footer-layout.component";
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarLayoutComponent, FooterLayoutComponent, SideBarComponent],
  template: `
   <div class="d-flex vh-100">
      <!-- Sidebar -->
      <app-side-bar class="bg-dark text-white flex-shrink-0" style="width: 280px;"></app-side-bar>

      <!-- Main content -->
      <div class="flex-grow-1 d-flex flex-column">
        <!-- Navbar -->
        <app-navbar-layout></app-navbar-layout>

        <!-- Router content -->
        <main class="flex-grow-1 overflow-auto p-3 ">
          <router-outlet></router-outlet>
        </main>

        <!-- Footer -->
        <app-footer-layout></app-footer-layout>
      </div>
    </div>
  `,
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
