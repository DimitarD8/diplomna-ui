import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage, User } from '../../models/chat/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = '/chat/message';
  private userUrl = '/chat/user'

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.apiUrl);
  }

  sendMessage(fromUserId: number, content: string): Observable<ChatMessage> {
    const messageRequest = { fromUserId, content };
    return this.http.post<ChatMessage>(this.apiUrl, messageRequest);
  }

  getUserByUserName(userName: string): Observable<User> {
    const url = `${this.userUrl}/${userName}`;
    return this.http.get<User>(url);
  }
}
