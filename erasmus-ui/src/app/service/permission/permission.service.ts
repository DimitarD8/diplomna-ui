import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private role = new BehaviorSubject<string>('');

  _userRole = this.role.asObservable();

  constructor() { }

  updateUserRole(newRole: string) {
    this.role.next(newRole);
  }

  isDoctoralAllowed(): boolean {
    return this.role.getValue() === 'DOCTORAL' || this.role.getValue() === 'TEACHER' || this.role.getValue() === 'ADMIN';
  }

  isTeacherAllowed(): boolean {
    return this.role.getValue() === 'TEACHER' || this.role.getValue() === 'ADMIN';
  }

  isAdminAllowed(): boolean {
    return this.role.getValue() === 'ADMIN';
  }
}
