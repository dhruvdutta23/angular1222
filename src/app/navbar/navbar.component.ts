import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../EmployeeService';
import { ToastService } from '../toast.service';
import { btnClickSuccessSound } from 'src/utility';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, public btnClickSound: btnClickSuccessSound, private employeeService: EmployeeService, private toastService: ToastService) { }
  onClick() {
    this.btnClickSound.playAudio();
    this.router.navigateByUrl('/');
    this.toastService.showToast("Logout Success", { backgroundColor: 'green' });
    this.employeeService.userLoggedInState.next(false);
    sessionStorage.removeItem('userLoggedIn');
  }
   myFunction() {
    const x = document.getElementById("myTopnav") as HTMLBodyElement;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
