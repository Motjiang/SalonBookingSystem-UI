import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { environment } from '../../environments/environment.development';
import { map, of, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../shared/models/login';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userSource = new ReplaySubject<User | null>(1);
  user$ = this.userSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  refreshUser() {
    return this.http
      .get<User>(`${environment.appUrl}/api/account/refresh-user-token`)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setUser(user);
          }
        })
      );
  }

  login(model: Login) {
    return this.http
      .post<User>(`${environment.appUrl}/api/account/login`, model)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setUser(user);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(environment.userKey);
    this.userSource.next(null);
    this.router.navigateByUrl('/');
  }

  initializeUser() {
  const storedUser = localStorage.getItem(environment.userKey);

  if (storedUser) {
    const user: User = JSON.parse(storedUser);

    // Push immediately into the ReplaySubject so UI shows logged-in state
    this.userSource.next(user);

    // Optionally confirm with backend (refresh token / validate user)
    this.refreshUser().subscribe({
      error: () => this.logout() // clear invalid tokens
    });
  }
}


  private setUser(user: User) {
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.userSource.next(user);
  }
}
