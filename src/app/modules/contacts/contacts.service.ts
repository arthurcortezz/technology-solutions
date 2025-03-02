import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { ContactInterface } from './interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private readonly httpClient: HttpClient) {}

  create(
    data: ContactInterface
  ): Observable<{ message: string; contact: ContactInterface }> {
    return this.httpClient.post<{
      message: string;
      contact: ContactInterface;
    }>('@api/contacts', data);
  }
}
