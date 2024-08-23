import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DoctoralMobilityRequest, DoctoralMobilityResponse } from "../../models/doctoral/doctoral";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoctoralService {
    private apiUrl = '/erasmus_program/doctoral';

    constructor(private http: HttpClient) { }

    // Get a specific DoctoralMobility by ID
    getDoctoralMobilityById(id: number): Observable<DoctoralMobilityResponse> {
        return this.http.get<DoctoralMobilityResponse>(`${this.apiUrl}/${id}`);
    }

    // Create a new DoctoralMobility
    createDoctoralMobility(request: DoctoralMobilityRequest): Observable<DoctoralMobilityResponse> {
        return this.http.post<DoctoralMobilityResponse>(`${this.apiUrl}`, request);
    }

    // Update an existing DoctoralMobility by ID
    updateDoctoralMobility(id: number, request: DoctoralMobilityRequest): Observable<DoctoralMobilityResponse> {
        return this.http.put<DoctoralMobilityResponse>(`${this.apiUrl}/${id}`, request);
    }

    // Delete a DoctoralMobility by ID
    deleteDoctoralMobility(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // Get all DoctoralMobilities
    getAllDoctoralMobilities(): Observable<DoctoralMobilityResponse[]> {
        return this.http.get<DoctoralMobilityResponse[]>(`${this.apiUrl}`);
    }
}