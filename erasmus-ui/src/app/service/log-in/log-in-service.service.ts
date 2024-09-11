import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../models/log-in/auth';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private apiUrl = '/log_in/login';

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  _isLoggedIn = this.isLoggedIn.asObservable();

  constructor(private httpClient: HttpClient) { }

  saveUserName(userName: string): void {
    localStorage.setItem('userName', userName);
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  saveUserId(id: number): void {
    localStorage.setItem('userId', JSON.stringify(id));
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  updateLogIn(newValue: boolean) {
    this.isLoggedIn.next(newValue);
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }



  logIn(user: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.apiUrl, user);
  }

}
