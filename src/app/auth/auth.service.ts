import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IUser {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<IUser> = new BehaviorSubject({name: 'guest'});

  public readonly user$: Observable<IUser> = this.user.asObservable();

  constructor() { }

  setup(userName: string) {
    if (!userName || userName.trim().length === 0) {
      return false;
    }
    this.user.next({
      name: userName
    });
    return this.isSetup();
  }

  getUser() {
    return this.user.asObservable();
  }

  isSetup() {
    return this.user.getValue().name.trim().length > 0 && this.user.getValue().name.trim() !== 'guest';
  }
}
