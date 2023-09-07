import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee, employeeDummyData } from 'src/utility';
import { ToastService } from '../toast.service';
import { btnClickSuccessSound } from 'src/utility';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../EmployeeService';

@Component({
  selector: 'app-homne-page-component',
  templateUrl: './dashboard-page-component.html',
  styleUrls: ['./dashboard-page-component.css']
})
export class DashboardPageComponent implements OnInit {
  selectedCardId: any;
  iconHover = false;
  isDeleteClicked = false;
  isLoading = false;
  deletedCardId: any;
  searchText = '';
  errorMsg = '';
  employees: IEmployee[] = [];
  temp: IEmployee[] = [];
  filteredEmployees: IEmployee[] = [];
  constructor(private router: Router,
    private toastService: ToastService,
    private btnClickSuccessSound: btnClickSuccessSound,
    private http: HttpClient,
    public empSerice: EmployeeService
  ) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('https://dummy.restapiexample.com/api/v1/employees').pipe().subscribe(
      (res: any) => {
        this.employees = [...res.data];
        this.filteredEmployees = [...this.employees];
        this.isLoading = false;
      },
      error => { this.isLoading = false; this.toastService.showToast(error.message, { backgroundColor: 'red' }) }

    );
  }
  onSearch(event: Event) {
    this.searchText = (<HTMLInputElement>event.target).value;
    if (this.searchText) {
      this.filteredEmployees = this.employees.filter(employee => employee.employee_name.includes(this.searchText));
    }
    else this.filteredEmployees = [...this.employees];
  }

  hoverInCard(event: Event) {
    if (!this.iconHover && !this.isDeleteClicked) this.selectedCardId = parseInt((<HTMLElement>event.target)?.id) as number;
  }
  hoverOutCard(event: Event) {
    this.selectedCardId = -1;
    this.iconHover = false;
  }
  hoverInIcons() {
    this.iconHover = true;
  }
  handleDelete(empId: string, i = -1) {

    if (!this.isDeleteClicked) {
      this.btnClickSuccessSound.playAudio();
      if (i == -1) this.deletedCardId = this.selectedCardId;
      else this.deletedCardId = i;
      this.isDeleteClicked = true;
      this.http.delete(`https://dummy.restapiexample.com/api/v1/delete/${empId}`).subscribe(
        res => {
          this.isDeleteClicked = false;
          this.deletedCardId = -1;
          this.toastService.showToast("Deleted Successfully", { backgroundColor: 'green' });
          this.isLoading = true;
          this.http.get('https://dummy.restapiexample.com/api/v1/employees').pipe().subscribe(
            (res: any) => {
              this.employees = [...res.data]; this.isLoading = false;
            },
            error => { this.isLoading = false; this.toastService.showToast(error.message, { backgroundColor: 'red' }) }
          );
        },
        error => { this.isDeleteClicked = false; this.toastService.showToast(error.message, { backgroundColor: 'red' }) }

      )
    }

  }
  openEmployeeForm() {
    this.btnClickSuccessSound.playAudio()
    this.empSerice.toggleForm();
  }
  handleEdit(empId: string) {
    this.btnClickSuccessSound.playAudio()
    this.router.navigateByUrl(`/employee/${empId}`);
  }
  ngOnDestroy() {
    this.toastService.showToast('');
  }
}
