import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdiministrativeMobilityRequest, AdiministrativeMobilityResponse } from '../../models/administrative/administrative';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {

  private apiUrl = '/erasmus_program/teacher';

  constructor(private http: HttpClient) { }

  // Get a specific DoctoralMobility by ID
  getAdiministrativeMobilityById(id: number): Observable<AdiministrativeMobilityResponse> {
    return this.http.get<AdiministrativeMobilityResponse>(`${this.apiUrl}/${id}`);
  }

  // Create a new DoctoralMobility
  createAdiministrativeMobility(request: AdiministrativeMobilityRequest): Observable<AdiministrativeMobilityResponse> {
    return this.http.post<AdiministrativeMobilityResponse>(`${this.apiUrl}`, request);
  }

  // Update an existing DoctoralMobility by ID
  updateAdiministrativeMobility(id: number, request: AdiministrativeMobilityRequest): Observable<AdiministrativeMobilityResponse> {
    return this.http.put<AdiministrativeMobilityResponse>(`${this.apiUrl}/${id}`, request);
  }

  // Delete a DoctoralMobility by ID
  deleteAdiministrativeMobility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get all DoctoralMobilities
  getAllAdiministrativeMobilities(): Observable<AdiministrativeMobilityResponse[]> {
    return this.http.get<AdiministrativeMobilityResponse[]>(`${this.apiUrl}`);
  }
}
