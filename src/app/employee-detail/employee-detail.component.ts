import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { btnClickSuccessSound, employeeDummyData, IEmployee } from 'src/utility';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private btnClickSound: btnClickSuccessSound,
    private http: HttpClient,
    private toastService: ToastService,

  ) { }
  empName = '';
  empAge = '';
  empSal = '';
  empId = '';
  isLoading = false;
  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe((res: any) => {
      this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe(
        (res: any) => {
          this.isLoading = false;
          const emp = res.data.find((emp: IEmployee) => emp.id == res.id);
          this.empName = emp?.employee_name as string;
          this.empAge = emp?.employee_age as string;
          this.empSal = emp?.employee_salary as string;
        },
        error => {
          this.toastService.showToast(error.message, { backgroundColor: 'red' });
          this.isLoading = false;
        }

      );

      this.empId = res.id;
    });

  }
  submit() {
    this.btnClickSound.playAudio();
    this.http.put(`https://dummy.restapiexample.com/api/v1/update/${this.empId}`, {
      "name": this.empName, "salary": this.empSal, "age": this.empAge
    }).pipe().subscribe(
      (res: any) => {
        this.toastService.showToast('Updated Succesfully', { backgroundColor: 'green' });
        this.router.navigateByUrl('/dashboard');
      },
      error => this.toastService.showToast(error.message, { backgroundColor: 'red' })
    );

  }
}
