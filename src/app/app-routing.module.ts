import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // login-http://localhost:4200/
  {
    path:'' ,component:LoginComponent
  },
  // http://localhost:4200/register
  {
    path:'register' ,component:RegisterComponent
  },
  // http://localhost:4200/dashboard
  {
    path:'dashboard' ,component:DashboardComponent
  },
  // http://localhost:4200/ministatement
  {
    path:'ministatement' ,component:MiniStatementComponent
  },
  // 
  {
    path:'**' ,component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
