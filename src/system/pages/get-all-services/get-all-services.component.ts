import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/models/view-service';
import { OfferedService } from '../page-services/offered-services/offered.service';
import { ToastService } from '../../shared/services/toast.service';
import { PaginationComponent } from '../../shared/utilities/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-all-services',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent, FormsModule],
  template: `
    <div class="container">
      <h1 class="mt-3">Our Services List</h1>

      <!-- Search Form -->
      <div class="d-flex mt-3 align-items-center">
        <form
          (ngSubmit)="onSearch()"
          role="search"
          class="flex-grow-1 me-2 d-flex"
        >
          <input
            type="search"
            class="form-control"
            [(ngModel)]="search"
            name="search"
            placeholder="Search by category name."
            aria-label="Search"
            style="width: 100%;"
          />
          <button type="submit" class="btn btn-outline-secondary ms-2">
            Search
          </button>
        </form>
        <a [routerLink]="['/dashboard/add-category']" class="btn btn-primary"
          >Add Category</a
        >
      </div>

      <!-- Show table if articles exist -->
      <ng-container *ngIf="services.length > 0; else noServicesTemplate">
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration Minutes</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let service of services">
              <td>{{ service.name }}</td>
              <td>{{ service.durationMinutes }}</td>
              <td>{{ service.price }}</td>
              <td>
                <a class="btn btn-light"> Edit </a>
              </td>
              <td>
                <a class="btn btn-danger"> Delete </a>
              </td>
            </tr>
          </tbody>
        </table>

        <app-pagination
          [totalPages]="totalPages"
          [pageIndex]="currentPage"
          [searchString]="search"
          (pageChanged)="onPageChange($event)"
        />
      </ng-container>

      <!-- Template to show when no services are found -->
      <ng-template #noServicesTemplate>
        <div class="alert alert-info mt-4">
          No services have been created yet. Start by adding your first service!
        </div>
      </ng-template>
    </div>
  `,
  styleUrl: './get-all-services.component.css',
})
export class GetAllServicesComponent implements OnInit {
  services: Service[] = [];
  search: string = '';
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;

  constructor(
    private offeredService: OfferedService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices() {
    this.offeredService
      .getAllServices(this.currentPage, this.pageSize, this.search)
      .subscribe({
        next: (response) => {
          this.services = response.data;
          this.totalPages = Math.ceil(response.totalCount / this.pageSize);
        },
        error: (error) => {
          if (error.status === 429) {
            this.toastService.showToast(
              false,
              'Too many requests. Please try again later.'
            );
          } else {
            this.toastService.showToast(
              false,
              'An error occurred while fetching services.'
            );
          }
        },
      });
  }

  onSearch() {
    this.currentPage = 1;
    this.loadServices();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadServices();
  }
}
