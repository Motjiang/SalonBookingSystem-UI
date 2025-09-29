import { ApplicationRef, ComponentRef, createComponent, Injectable, Injector } from '@angular/core';
import { ToastComponent } from '../utilities/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
private toastRef?: ComponentRef<ToastComponent>;

constructor(private injector: Injector, private appRef: ApplicationRef) {}

showToast(isSuccess: boolean, message: string) {
  // Create toast dynamically
  this.toastRef = createComponent(ToastComponent, {
    environmentInjector: this.appRef.injector
  });

  const instance = this.toastRef.instance;
  instance.message = message;
  instance.isSuccess = isSuccess;

  this.appRef.attachView(this.toastRef.hostView);
  const domElem = (this.toastRef.hostView as any).rootNodes[0] as HTMLElement;
  document.body.appendChild(domElem);

  setTimeout(() => instance.show());
}

}
