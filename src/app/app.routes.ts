import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  {path:'employees',component:EmployeeListComponent, canActivate:[authGuard] },
  {path:'login',component: LoginComponent},
  {path:'', redirectTo: 'login',pathMatch:'full'},
];
