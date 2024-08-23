import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private userRole = new BehaviorSubject<string>('');

  _userRole = this.userRole.asObservable();

  constructor() { }

  updateUserRole(newRole: string) {
    this.userRole.next(newRole);
  }

  isDoctoralAllowed(): boolean {
    return this.userRole.getValue() === 'DOCTORAL' || this.userRole.getValue() === 'TEACHER' || this.userRole.getValue() === 'ADMIN';
  }

  isTeacherAllowed(): boolean {
    return this.userRole.getValue() === 'TEACHER' || this.userRole.getValue() === 'ADMIN';
  }

  isAdminAllowed(): boolean {
    return this.userRole.getValue() === 'ADMIN';
  }
}
