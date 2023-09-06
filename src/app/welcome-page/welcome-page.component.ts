import { Component } from '@angular/core';
import { EmployeeService } from '../EmployeeService';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
constructor(public employeeService: EmployeeService){
  
}
}
