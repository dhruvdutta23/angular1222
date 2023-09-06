import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee, employeeDummyData } from 'src/utility';
import { ToastService } from '../toast.service';

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
  employees: IEmployee[] = employeeDummyData;
  temp: IEmployee[] = [];
  filteredEmployees = [...this.employees];
  constructor(private router: Router, private toastService: ToastService) { }
  ngOnInit(): void {
    //http fetch to fetch data
  }
  onSearch(event: Event) {
    this.searchText = (<HTMLInputElement>event.target).value;
    if (this.searchText) {
      this.filteredEmployees = this.employees.filter(employee => employee.name.includes(this.searchText));
    }
    else this.filteredEmployees = [...this.employees];
  }

  hoverInCard(event: Event) {
    if (!this.iconHover && !this.isDeleteClicked) this.selectedCardId = parseInt((<HTMLElement>event.target)?.id) as number;
    //  (((<HTMLElement>event?.target)?.childNodes) && ((<HTMLElement>event?.target)?.childNodes)[0] as HTMLAudioElement)?.play();
  }
  hoverOutCard(event: Event) {
    // (<HTMLAudioElement>((<HTMLElement>event.target).childNodes)[0]).pause();
    this.selectedCardId = -1;
    this.iconHover = false;
  }
  hoverInIcons() {
    this.iconHover = true;
  }
  handleDelete(index: string, i = -1) {
    //delete req
    console.log(i)
    if (!this.isDeleteClicked) {
      if (i == -1) this.deletedCardId = this.selectedCardId;
      else this.deletedCardId = i;
      this.isDeleteClicked = true;
      if (this.isDeleteClicked) {
        setTimeout(() => {
          this.filteredEmployees.forEach((employee: IEmployee) => {
            if (employee.id != index) this.temp.push(employee);
          });

          this.employees = [...this.temp];
          this.filteredEmployees = [...this.temp]
          this.temp = [];
          this.isDeleteClicked = false;
          this.deletedCardId = -1;
          console.log("in handle deleete")
          this.toastService.showToast("Deleted Successfully", { backgroundColor: 'green' });
        }, 1000);
      }
    }

  }
  handleEdit(index: string) {
    this.router.navigateByUrl(`/employee/${index}`);
  }
  ngOnDestroy() {
    this.toastService.showToast('');
  }
}
