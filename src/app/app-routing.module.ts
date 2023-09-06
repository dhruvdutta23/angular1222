import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DashboardPageComponent } from './dashboard-page-component/dashboard-page-component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthService } from './auth.service';
import { LogOutService } from './logout.service';

const routes: Routes = [
  { path: '', component: WelcomePageComponent, canActivate: [LogOutService]  },
  {
    path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthService]
  },
  { path: 'home', component: HomePageComponent, canActivate: [AuthService] },

  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AuthService] },

  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthService] },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: "notFound" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
