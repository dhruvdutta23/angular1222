import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../EmployeeService';
import { ToastService } from '../toast.service';
import { btnClickSuccessSound ,btnClickFailSound} from 'src/utility';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: any;
  constructor(private router: Router,
    private btnClickSuccessSound: btnClickSuccessSound,
    private btnClickFailSound:  btnClickFailSound,
    private employeeService: EmployeeService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (email === 'dhruba@gmail.com' && password == 12345) {
      this.btnClickSuccessSound.playAudio()
      this.router.navigateByUrl('/home');
      this.toastService.showToast("Login Success", { backgroundColor: 'green', color: 'white' });
      this.employeeService.userLoggedInState.next(true);
      sessionStorage.setItem('userLoggedIn', 'Y');
    }
    else {
     this.btnClickFailSound.playAudio()
      this.toastService.showToast("Invalid Credentials", { backgroundColor: 'red', color: 'white' });
      this.loginForm.reset();
    }
  }
  onRegisterClick() {
    this.employeeService.showRegisterComp();
  }


}
