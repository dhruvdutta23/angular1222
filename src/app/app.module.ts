import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegisterageComponent } from './registerage/registerage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page-component/dashboard-page-component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastCompComponent } from './toast-comp/toast-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RegisterageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    NavbarComponent,
    AboutComponent,
    EmployeeDetailComponent,
    NotFoundComponent,
    HomePageComponent,
    ToastCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
