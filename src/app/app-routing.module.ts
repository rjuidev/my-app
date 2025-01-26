import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent },
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
  {path:'home',canActivate:[AuthenticationGuard],component:HomeComponent },{path:'data-binding',canActivate:[AuthenticationGuard],component:DataBindingComponent },
  
  
  ] },
  {path:'**',component:ErrorComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
