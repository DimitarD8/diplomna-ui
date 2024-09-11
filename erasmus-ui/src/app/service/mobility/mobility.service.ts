import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MobilityRequestDto, MobilityResponseDto, MobilityUpdateDto } from '../../models/mobility/mobility';

@Injectable({
  providedIn: 'root'
})
export class MobilityService {

  private apiUrl = '/erasmus_program/mobility'; 

  constructor(private http: HttpClient) { }

  // Get all mobilities
  getAllMobilities(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}`);
  }

  // Get all doctoral practices
  getAllDoctoralPractices(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/doctoral/practice`);
  }

  // Get all doctoral trainings
  getAllDoctoralTrainings(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/doctoral/training`);
  }

  // Get all doctoral intensive short-term trainings
  getAllDoctoralIntensiveShortTermTrainings(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/doctoral/intensive-short`);
  }

  // Get all student trainings
  getAllStudentTrainings(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/student/training`);
  }

  // Get all student practices
  getAllStudentPractices(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/student/practice`);
  }

  // Get all teacher practices
  getAllTeacherPractices(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/teacher/practice`);
  }

  // Get all teacher trainings
  getAllTeacherTrainings(): Observable<MobilityResponseDto[]> {
    return this.http.get<MobilityResponseDto[]>(`${this.apiUrl}/teacher/training`);
  }

  // Get a mobility by ID
  getMobilityById(id: number): Observable<MobilityResponseDto> {
    return this.http.get<MobilityResponseDto>(`${this.apiUrl}/${id}`);
  }

  // Create a new mobility
  createMobility(mobility: MobilityRequestDto): Observable<MobilityResponseDto> {
    return this.http.post<MobilityResponseDto>(this.apiUrl, mobility);
  }

  // Update an existing mobility
  updateMobility(mobility: MobilityUpdateDto): Observable<MobilityResponseDto> {
    return this.http.put<MobilityResponseDto>(this.apiUrl, mobility);
  }

  deleteMobility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
