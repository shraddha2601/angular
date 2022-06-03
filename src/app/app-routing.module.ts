import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : ' ', redirectTo: 'login', pathMatch : 'full'}, 
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'dashboard', component: EmployeeDashboardComponent},
  {path : 'signuplist', component: SignUpUserComponent},
  {path : 'homePage', component: HomePageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
