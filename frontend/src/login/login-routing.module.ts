import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login.component";
import {FirstLoginComponent} from "./first-login/first-login.component";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'change-password',
    component: FirstLoginComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
