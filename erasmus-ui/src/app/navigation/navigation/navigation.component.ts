import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogInService } from '../../service/log-in/log-in-service.service';
import { PermissionService } from '../../service/permission/permission.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../log-in/login/login.component';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  navLinksActive = false;
  isLoggedIn: boolean = false;
  isDoctoralAllowed: boolean = false;
  isTeacherAllowed: boolean = false;
  userName: string = '';

  constructor(private router: Router
    , private permissionService: PermissionService
    , private dialog: MatDialog
    , private logInService: LogInService) {
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')!;
    this.logInService._isLoggedIn.subscribe((result: boolean) => {
      this.isLoggedIn = result;
    });
    this.isDoctoralAllowed = this.permissionService.isDoctoralAllowed();
    this.isTeacherAllowed = this.permissionService.isTeacherAllowed();
  }

  toggleNav() {
    this.navLinksActive = !this.navLinksActive;
  }

  homePage() {
    this.router.navigate(['']);
  }

  newsPage() {
    this.router.navigate(['/news']);
  }

  docktoralInformation() {
    this.router.navigate(['/doctoral-information']);
  }

  docktoralTraining() {
    this.router.navigate(['/doctoral-training']);
  }

  docktoralPractice() {
    this.router.navigate(['/doctoral-practice']);
  }

  docktoralShortTraining() {
    this.router.navigate(['/doctoral-short-term-training']);
  }

  studentPractice() {
    this.router.navigate(['/student-practice'])
  }

  studentTraining() {
    this.router.navigate(['/student-training'])
  }

  administrativeTeaching() {
    this.router.navigate(['/administrative-teaching'])
  }

  administrativeTraining() {
    this.router.navigate(['/administrative-training'])
  }

  chat(){
    this.router.navigate(['/chat'])
  }
}
