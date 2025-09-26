import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { apiUrls } from '../Constants/apiUrls';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(apiUrls.login, {
        username,
        password,
      })
      .pipe(
        tap((res: any) => {
          console.log('yes');
          localStorage.setItem('token', res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    // this.toastr.info('Logged out successfully', 'Info');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
