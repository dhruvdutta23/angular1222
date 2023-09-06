import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeService } from './EmployeeService';



@Injectable({
  providedIn: 'root'
})
export class LogOutService {
  isEmployeeLoggedIn = false;
  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('userLoggedIn')=='Y') {
      this.router.navigate(['/home']);
    }
    return true;
  }
}
