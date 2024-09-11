import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation/navigation.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../log-in/login/login.component';
import { LogInService } from '../../service/log-in/log-in-service.service';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from '../../chat/chat/chat.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterLink, RouterLinkActive, RouterOutlet, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog, private logInService: LogInService) {
    this.logInService._isLoggedIn.subscribe((result: boolean) => {
      this.isLoggedIn = result;
    })
    if (!this.isLoggedIn) {
      this.openLoginDialog();
    }
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
