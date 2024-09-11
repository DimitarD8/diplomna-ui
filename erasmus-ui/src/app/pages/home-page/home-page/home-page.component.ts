import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../log-in/login/login.component';
import {NavigationComponent} from "../../../navigation/navigation/navigation.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private dialog: MatDialog) {
    this.openLoginDialog();
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
