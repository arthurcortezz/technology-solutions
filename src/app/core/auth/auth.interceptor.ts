import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { AuthUtils } from './auth.utils';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('@api') !== -1) {
      req = req.clone({
        url: req.url.replace('@api', environment.api),
      });
    }

    if (
      this.authService.accessToken &&
      !AuthUtils.isTokenExpired(this.authService.accessToken)
    ) {
      req = req.clone({
        setHeaders: this.getOptions(req),
      });
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          location.reload();
        }

        return throwError(error);
      })
    );
  }

  getOptions(req: HttpRequest<any>): any {
    const isFormData = req.body;
    if (isFormData) {
      return {
        Authorization: `Bearer ${this.authService.accessToken}`,
      };
    }

    return {
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.authService.accessToken}`,
    };
  }
}
