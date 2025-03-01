import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { UserJWTInterface } from '../user/user.types';
import { LoginBodyInterface, LoginResponseInterface } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated: boolean = false;
  public accessToken: string = '';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  public getAccessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  public signIn(
    credentials: LoginBodyInterface
  ): Observable<LoginResponseInterface> {
    if (this.authenticated) {
      return throwError(() => new Error('O usuário já está conectado.'));
    }

    return this.httpClient
      .post<LoginResponseInterface>('@api/authentication/login', credentials)
      .pipe(
        switchMap((response: LoginResponseInterface) => {
          if (response && response.accessToken && response.user) {
            this.authenticated = true;
            this.accessToken = response.accessToken;
            this.userService.user = response.user;
          }

          return of(response);
        })
      );
  }

  public signInUsingToken(): Observable<boolean> {
    return this.httpClient
      .get<UserJWTInterface>('@api/authentication/profile')
      .pipe(
        catchError(() => of(null)),
        map((response: UserJWTInterface | null) => {
          if (response) {
            this.authenticated = true;
            this.userService.user = response;
            return true;
          }
          return false;
        })
      );
  }
}
