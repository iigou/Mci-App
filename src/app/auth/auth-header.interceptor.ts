import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor {

  private userName: string;

  constructor(private authSvc: AuthService) {
    this.authSvc.getUser().subscribe(x => this.userName = x.name);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedRequest = req.clone({
        setHeaders: {
          'X-INFO-PLAYER': this.userName
        }
      });
      return next.handle(clonedRequest);
  }
}
