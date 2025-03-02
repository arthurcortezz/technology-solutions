import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InviteInterface } from './invite.interface';

@Injectable({
  providedIn: 'root',
})
export class InvitesService {
  constructor(private readonly httpClient: HttpClient) {}

  create(
    data: InviteInterface
  ): Observable<{ message: string; invite: InviteInterface }> {
    return this.httpClient.post<{
      message: string;
      invite: InviteInterface;
    }>('@api/invites', data);
  }
}
