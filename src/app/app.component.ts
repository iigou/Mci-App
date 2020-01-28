import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MCI';
  userName: string;
  user$: Observable<IUser>;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authSvc.getUser();
  }

}
