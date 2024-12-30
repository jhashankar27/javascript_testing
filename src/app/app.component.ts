import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <ng-container *ngIf="!isAdminRoute; else adminContent">
      <app-header />
      <router-outlet />
      <app-footer />
    </ng-container>
    
    <ng-template #adminContent>
      <router-outlet />
    </ng-template>
  `,
})
export class AppComponent {
  isAdminRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isAdminRoute = event.url.includes('/dashboard');
      });
  }
}
