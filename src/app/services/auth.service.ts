import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  // Fixed credentials for demo
  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = 'temple123';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const isValid = username === this.VALID_USERNAME && password === this.VALID_PASSWORD;
    this.isAuthenticatedSubject.next(isValid);
    return isValid;
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}