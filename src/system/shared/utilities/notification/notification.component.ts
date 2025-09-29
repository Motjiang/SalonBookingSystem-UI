import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
// Import Bootstrap types for better type safety
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div #modalRef class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-header"
            [ngClass]="{ 'bg-success': isSuccess, 'bg-danger': !isSuccess }"
          >
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" (click)="hide()"></button>
          </div>
          <div class="modal-body">
            <p>{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="hide()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalRef', { static: true }) modalRef!: ElementRef;

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isSuccess: boolean = true;

  private modalInstance?: bootstrap.Modal;

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  ngOnDestroy() {
    this.modalInstance?.dispose(); // ✅ cleanup to avoid leaks
  }

  show() {
    this.modalInstance?.show();
  }

  hide() {
    this.modalInstance?.hide();
  }
}

