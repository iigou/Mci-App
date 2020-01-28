import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  userName = '' ;

  constructor(private authSvc: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    if (!this.authSvc.setup(this.userName)) {
      this.snackBar.open('Invalid Username', '', {
        duration: 2000,
      });
      return;
    }

    this.router.navigateByUrl('/home');
  }
}
