import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { UserJWTInterface } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: ReplaySubject<UserJWTInterface> =
    new ReplaySubject<UserJWTInterface>(1);

  constructor(private httpClient: HttpClient) {}

  set user(value: UserJWTInterface) {
    this._user.next(value);
  }

  get user$(): Observable<UserJWTInterface> {
    return this._user.asObservable();
  }

  get(): Observable<UserJWTInterface> {
    return this.httpClient
      .get<UserJWTInterface>('@api/authentication/profile')
      .pipe(
        tap((response) => {
          this._user.next(response);
        })
      );
  }
}
