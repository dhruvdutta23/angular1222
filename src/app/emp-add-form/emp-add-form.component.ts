import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../EmployeeService';
import { btnClickSuccessSound } from 'src/utility';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-emp-add-form',
  templateUrl: './emp-add-form.component.html',
  styleUrls: ['./emp-add-form.component.css']
})
export class EmpAddFormComponent {
  showForm = false;
  empName = '';
  empAge = '';
  empSal = '';
  empId = '';
  constructor(
    private empSerice: EmployeeService,
    private btnClickSound: btnClickSuccessSound,
    private http: HttpClient,
    private toastService: ToastService,
  ) { }
  ngOnInit() {
    this.showForm = this.empSerice.showFormState;
  }
  onClose() {
    this.empSerice.toggleForm();
  }
  submit() {
    console.log({
      "name": this.empName, "salary": this.empSal, "age": this.empAge
    })
    this.btnClickSound.playAudio();
    this.http.post(`https://dummy.restapiexample.com/api/v1/create`, {
      "name": this.empName, "salary": this.empSal, "age": this.empAge
    }).pipe().subscribe(
      (res: any) => {
        this.toastService.showToast('Updated Succesfully', { backgroundColor: 'green' });
        this.empName = '';
        this.empSal = '';
        this.empAge = '';
      },
      error => this.toastService.showToast(error.message, { backgroundColor: 'red' })
    );

  }
}
