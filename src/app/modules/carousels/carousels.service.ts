import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CarouselInterface } from './interfaces/carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class CarouselsService {
  constructor(private readonly httpClient: HttpClient) {}

  all(): Observable<CarouselInterface[]> {
    return this.httpClient.get<CarouselInterface[]>(
      environment.api + '/carousels'
    );
  }
}
