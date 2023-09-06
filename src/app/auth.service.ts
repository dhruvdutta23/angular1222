import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeService } from './EmployeeService';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isEmployeeLoggedIn = false;
  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.employeeService.userLoggedInState.subscribe(res => this.isEmployeeLoggedIn = res);
    if (!this.isEmployeeLoggedIn && sessionStorage.getItem('userLoggedIn') != 'Y') {
      this.router.navigate(['/']);
    }
    console.log(this.route.url)
    return true;
  }
}
