import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CreateBookingInterface } from '../models/booking.model';
import { Observable } from 'rxjs';
import { BlankApiResponse } from '../../../shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  // Dependancies
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/booking`

  /**
   * Sends a booking request to the Company via email with all the customer infomration
   * Add the service type requested with additional customer infomration and requests
   * @param dto CreateBookingInterface
   * @returns BlankApiResponse
   */
  createBooking(dto: CreateBookingInterface): Observable<BlankApiResponse>{

    return this.http.post<BlankApiResponse>(`${this.baseUrl}`, dto);
  }
}
