import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../EmployeeService';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private employeeService: EmployeeService, private toastService:ToastService) { }
  onClick() {
    this.router.navigateByUrl('/home');
    this.toastService.showToast("Logout Success", {backgroundColor: 'light-green'});
    this.employeeService.userLoggedInState.next(false);
    sessionStorage.removeItem('userLoggedIn');
  }
}
