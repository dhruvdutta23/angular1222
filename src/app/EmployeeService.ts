import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  showLoginPage = false;
  empCred = {};
  showFormState= false;
  userLoggedInState = new BehaviorSubject<boolean>(sessionStorage.getItem('userLoggedIn') == 'Y' ? true : false);

  constructor() { }
  showLoginComp() {
    this.showLoginPage = true;
  }
  showRegisterComp() {
    this.showLoginPage = false;
  }
  storeEmpCred(empCred: any) {
    this.empCred = empCred;
    console.log(this.empCred)
  }
  toggleForm(){
    this.showFormState=!this.showFormState;
  }
}
