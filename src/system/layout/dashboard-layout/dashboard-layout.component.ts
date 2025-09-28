import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLayoutComponent } from "../navbar-layout/navbar-layout.component";
import { FooterLayoutComponent } from "../footer-layout/footer-layout.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarLayoutComponent, FooterLayoutComponent],
  template: `
    <app-navbar-layout/>
    <router-outlet/>
    <app-footer-layout/>
  `,
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
