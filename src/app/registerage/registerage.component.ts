import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../EmployeeService';
import { IRegUsers, regUsers } from 'src/utility';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-registerage',
  templateUrl: './registerage.component.html',
  styleUrls: ['./registerage.component.css']
})
export class RegisterageComponent implements OnInit {
  registrationForm: any;
  emailTaken: any = null;
  showLoader = false;
  email = '';
  constructor(private router: Router, private employeeService: EmployeeService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.toastService.showToast("Registration Success", { backgroundColor: 'green' });
    this.employeeService.showLoginComp();
    this.employeeService.storeEmpCred(this.registrationForm.value);
  }
  onLoginClick() {
    this.toastService.showToast("");
    this.employeeService.showLoginComp();
  }
  // emailSearch(event: Event) {
  //   //http
  //   this.email = (<HTMLInputElement>event.target).value as string;
  //   if (this.email) {
  //     this.showLoader = true;
  //     const isUserReg = regUsers.filter((regUser: IRegUsers) => regUser.email.includes(this.email)).length;
  //     if (isUserReg) this.emailTaken = true;
  //     else this.emailTaken = false;
  //     this.showLoader = false;
  //   }
  //   else {
  //     this.emailTaken = false;
  //     this.showLoader = false;
  //     console.log(this.emailTaken)

  //   }

  // }
}
