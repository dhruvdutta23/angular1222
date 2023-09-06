import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from '../toast.service';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-toast-comp',
  templateUrl: './toast-comp.component.html',
  styleUrls: ['./toast-comp.component.css']
})
export class ToastCompComponent implements OnInit {
  message = '';
  show = false;
  autohide = true;

  styles = {};
  constructor(public toastService: ToastService,) { }
  ngOnInit(): void {
    this.toastService.toastSubject.subscribe((res: any) => {
      console.log("res", res)
      if (res.message) {
        this.message = res.message;
        this.show = true;
        this.styles = res.config;
      }
    });
    // this.toastService.hideToast();
  }
  ngOnDestroy() {
    //s this.toastService.toastSubject.unsubscribe();
    // this.subscription.unsubscribe();
  }
}
