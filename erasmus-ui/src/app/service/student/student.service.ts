import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentMobilityRequest, StudentMobilityResponse } from '../../models/student/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = '/erasmus_program/student';

  constructor(private http: HttpClient) { }

  // Get a specific DoctoralMobility by ID
  getStudentMobilityById(id: number): Observable<StudentMobilityResponse> {
    return this.http.get<StudentMobilityResponse>(`${this.apiUrl}/${id}`);
  }

  // Create a new DoctoralMobility
  createStudentMobility(request: StudentMobilityRequest): Observable<StudentMobilityResponse> {
    return this.http.post<StudentMobilityResponse>(`${this.apiUrl}`, request);
  }

  // Update an existing DoctoralMobility by ID
  updateStudentMobility(id: number, request: StudentMobilityRequest): Observable<StudentMobilityResponse> {
    return this.http.put<StudentMobilityResponse>(`${this.apiUrl}/${id}`, request);
  }

  // Delete a DoctoralMobility by ID
  deleteStudentMobility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get all DoctoralMobilities
  getAllStudentMobilities(): Observable<StudentMobilityResponse[]> {
    return this.http.get<StudentMobilityResponse[]>(`${this.apiUrl}`);
  }
}
