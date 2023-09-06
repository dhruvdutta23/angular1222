import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  toastSubject = new BehaviorSubject({});
  showToast(message: string, config = {}) {
    console.log("in toast service", config, message)
    this.toastSubject.next({
      config,
      message
    });
  }
  // hideToast() {
  //   this.toastSubject.complete();
  // }
}
