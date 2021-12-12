import { GeneratorComponent } from './generator/generator.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

import { AddEditLogComponent } from './logindetails/add-edit-log/add-edit-log.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarddetailsComponent} from './carddetails/carddetails.component';
import{AddEditCardComponent}from './carddetails/add-edit-card/add-edit-card.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'logindet',component:LogindetailsComponent},
  {path:'carddetails',component:CarddetailsComponent},
  {path:'addlogin',component:AddEditLogComponent},
  {path:'addcard',component:AddEditCardComponent},
 {path:'gen',component:GeneratorComponent},
   { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '**', component: NotFoundComponent },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
