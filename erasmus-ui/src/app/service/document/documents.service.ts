import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DocumentMetadataDto } from '../../models/document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private readonly RESPONSE_TYPE = 'blob';

  private apiUrl = '/erasmus_program/documents'

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<string>(`${this.apiUrl}/upload`, formData);
  }

  downloadFile(fileName: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${fileName}`, {
      responseType: this.RESPONSE_TYPE,
    });
  }

  getDocumentsByTrainingId(trainingId: number): Observable<DocumentMetadataDto[]> {
    return this.http.get<DocumentMetadataDto[]>(`${this.apiUrl}/training/${trainingId}`);
  }

  getDocumentsByPracticeId(practiceId: number): Observable<DocumentMetadataDto[]> {
    return this.http.get<DocumentMetadataDto[]>(`${this.apiUrl}/practice/${practiceId}`);
  }

  getDocumentsByIntensiveShortTermTrainingId(IntensiveShortTermTrainingId: number): Observable<DocumentMetadataDto[]> {
    return this.http.get<DocumentMetadataDto[]>(`${this.apiUrl}/intensiveShortTermTraining/${IntensiveShortTermTrainingId}`);
  }

  previewDocument(documentId: number): void {
    const request = new HttpRequest('GET', `${this.apiUrl}/download?documentId=${documentId}`, {
      responseType: 'arraybuffer',
      observe: 'response'
    });

    this.http.request<ArrayBuffer>(request).subscribe((event: any) => {
      if (event.type === HttpEventType.Response) {
        const response = event as HttpResponse<ArrayBuffer>;
        const blob = new Blob([response?.body!], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(blob);
        window.open(objectUrl, '_blank');
      }
    });
  }

  updateFile(id: number, file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.put<string>(`${this.apiUrl}/update/${id}`, formData);
  }

  deleteDocumentById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
