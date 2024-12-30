import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User, LoginCredentials } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = 'temple123';

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: LoginCredentials): boolean {
    const isValid = credentials.username === this.VALID_USERNAME && 
                   credentials.password === this.VALID_PASSWORD;
    
    if (isValid) {
      const user: User = {
        username: credentials.username,
        role: 'admin'
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
    
    return isValid;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.currentUserSubject.asObservable()
      .pipe(map((user: User | null) => !!user));
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
}