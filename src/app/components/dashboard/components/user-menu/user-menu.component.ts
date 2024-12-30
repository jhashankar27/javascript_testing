import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative">
      <button 
        (click)="toggleMenu()" 
        class="flex items-center space-x-3 focus:outline-none text-white"
      >
        <div class="h-8 w-8 rounded-full bg-orange-700 flex items-center justify-center">
          <i class="fas fa-user"></i>
        </div>
        <div class="hidden md:block text-right">
          <div class="text-sm font-medium">Temple Administrator</div>
          <div class="text-xs text-orange-200">admin&#64;hindutemple.in</div>
        </div>
        <i class="fas fa-chevron-down text-orange-200 text-sm"></i>
      </button>

      <!-- Dropdown Menu -->
      <div *ngIf="isMenuOpen" 
           class="absolute right-0 mt-2 w-48 bg-orange-700 rounded-md shadow-lg py-1 z-50">
        <a routerLink="/dashboard/profile" 
           class="block px-4 py-2 text-sm text-white hover:bg-orange-600">
          <i class="fas fa-user-circle mr-2"></i>Profile
        </a>
        <a routerLink="/dashboard/settings" 
           class="block px-4 py-2 text-sm text-white hover:bg-orange-600">
          <i class="fas fa-cog mr-2"></i>Settings
        </a>
        <div class="border-t border-orange-600"></div>
        <button (click)="logout()" 
                class="block w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-600">
          <i class="fas fa-sign-out-alt mr-2"></i>Logout
        </button>
      </div>
    </div>
  `
})
export class UserMenuComponent {
  isMenuOpen = false;

  constructor(private authService: AuthService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}