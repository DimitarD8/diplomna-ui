import { Component, EventEmitter, Output } from '@angular/core';
import { LogInService } from '../../service/log-in/log-in-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginRequest, LoginResponse } from '../../models/log-in/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PermissionService } from '../../service/permission/permission.service';
import { DocumentsService } from '../../service/document/documents.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private logInservice: LogInService,
    private matDialogRef: MatDialogRef<LoginComponent>,
    private permissionService: PermissionService,
    private documentsService: DocumentsService) {
  }

  login(): void {
    const loginData: LoginRequest = { username: this.username, password: this.password };
    this.logInservice.logIn(loginData).subscribe(
      (response: LoginResponse) => {
        const token = response.token;
        this.permissionService.updateUserRole(response.role);
        this.logInservice.saveToken(token);
        this.logInservice.updateLogIn(true);
        this.logInservice.saveUserName(response.username);
        this.logInservice.saveUserId(response.id);
        this.matDialogRef.close();
      },
      error => {
        console.error('There was an error!', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

}
