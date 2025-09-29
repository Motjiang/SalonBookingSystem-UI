import { ApplicationRef, ComponentRef, createComponent, Injectable } from '@angular/core';
import { NotificationComponent } from '../utilities/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private modalRef?: ComponentRef<NotificationComponent>;

   constructor(
    private appRef: ApplicationRef
  ) {}

  showNotification(isSuccess: boolean, title: string, message: string) {
    // Destroy any existing notification before creating a new one
    this.destroyNotification();

    // Dynamically create component
    this.modalRef = createComponent(NotificationComponent, {
      environmentInjector: this.appRef.injector, // ✅ works in Angular 18
    });

    const instance = this.modalRef.instance;
    instance.title = title;
    instance.message = message;
    instance.isSuccess = isSuccess;

    this.appRef.attachView(this.modalRef.hostView);

    const domElem = (this.modalRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Trigger the "show" after the component initializes
    Promise.resolve().then(() => instance.show());

    // Auto-cleanup after X seconds (optional)
    setTimeout(() => {
      this.destroyNotification();
    }, 5000);
  }

  private destroyNotification() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = undefined;
    }
  }
}
