import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AccountService } from '../../account/account.service';
import { take } from 'rxjs';
import { User } from '../../shared/models/user';
import { jwtDecode } from 'jwt-decode';

@Directive({
  selector: '[appUserRole]',
  standalone: true,
})
export class UserRoleDirective {
  @Input() appUserRole: string[] = [];

  private accountService = inject(AccountService);
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  constructor() {}

  ngOnInit() {
    this.accountService.user$.pipe(take(1)).subscribe((user: User | null) => {
      if (user) {
        const decodedToken: any = jwtDecode(user.jwt);

        const roles = Array.isArray(decodedToken.role) ? decodedToken.role : [decodedToken.role];

        if (roles.some((role: string) => this.appUserRole.includes(role))) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
