import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
// Import Bootstrap types for better type safety
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="position: fixed; top: 1rem; right: 1rem; z-index: 1055;">
      <div
        #toastRef
        class="toast align-items-center border-0"
        [ngClass]="{
          'text-bg-success': isSuccess,
          'text-bg-danger': !isSuccess
        }"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">
            {{ message }}
          </div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './toast.component.css',
})
export class ToastComponent implements AfterViewInit {
  @ViewChild('toastRef', { static: true }) toastRef!: ElementRef;

  @Input() message: string = '';
  @Input() isSuccess: boolean = true;

  private toastInstance: any;

  ngAfterViewInit() {
    this.toastInstance = new bootstrap.Toast(this.toastRef.nativeElement);
  }

  show() {
    this.toastInstance?.show();
  }

  hide() {
    this.toastInstance?.hide();
  }
}
