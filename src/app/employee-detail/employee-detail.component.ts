import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeDummyData, IEmployee } from 'src/utility';

@Component({
  selector: 'app-course-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  empName = '';
  empAge = '';
  empPhone = '';
  empId = '';
  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      const emp = employeeDummyData.find((emp: IEmployee) => emp.id === res.id);
      this.empName = emp?.name as string;
      this.empAge = emp?.age as string;
      this.empPhone = emp?.phone as string;
    });

  }
  submit() {
    this.router.navigateByUrl('/dashboard')
  }
}
