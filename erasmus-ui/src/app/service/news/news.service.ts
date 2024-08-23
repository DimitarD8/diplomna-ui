import { HttpClient } from "@angular/common/http";
import { NewsRequest, NewsResponse } from "../../models/news/news";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = '/erasmus_program/news';

  constructor(private http: HttpClient) { }

  createNews(newsRequest: NewsRequest): Observable<NewsResponse> {
    const formData = new FormData();
    formData.append('title', newsRequest.title);
    formData.append('image', newsRequest.image);
    formData.append('postedBy', newsRequest.postedBy);

    return this.http.post<NewsResponse>(`${this.apiUrl}`, formData);
  }

  getNewsById(id: number): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(`${this.apiUrl}/${id}`);
  }

  getAllNews(): Observable<NewsResponse[]> {
    return this.http.get<NewsResponse[]>(`${this.apiUrl}`);
  }

  updateNews(id: number, newsRequest: NewsRequest): Observable<NewsResponse> {
    const formData = new FormData();
    formData.append('title', newsRequest.title);
    formData.append('image', newsRequest.image);
    formData.append('postedBy', newsRequest.postedBy);

    return this.http.put<NewsResponse>(`${this.apiUrl}/${id}`, formData);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
