import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('AuthGuard check:', isAuthenticated);
    
    if (isAuthenticated) {
      console.log('User is authenticated, allowing access');
      return true;
    } else {
      console.log('User not authenticated, redirecting to login');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
