import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AnalytiscComponent } from './components/analytisc/analytisc.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OtpvalidationComponent } from './components/login/otpvalidation/otpvalidation.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'user', component: UsersComponent },
  { path: 'otp-verification', component: OtpvalidationComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'analytics', component: AnalytiscComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
