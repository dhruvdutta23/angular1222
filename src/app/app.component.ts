import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isUserLoggedIn = false;
  constructor(public employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.userLoggedInState.subscribe(res => this.isUserLoggedIn = res);
  }
}
