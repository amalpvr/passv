import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { ShowLogComponent } from './logindetails/show-log/show-log.component';
import { AddEditLogComponent } from './logindetails/add-edit-log/add-edit-log.component';

import { CarddetailsComponent } from './carddetails/carddetails.component';
import { ShowCardComponent } from './carddetails/show-card/show-card.component';
import { AddEditCardComponent } from './carddetails/add-edit-card/add-edit-card.component';

import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GeneratorComponent } from './generator/generator.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LogindetailsComponent,
    ShowLogComponent,
    AddEditLogComponent,
    
    CarddetailsComponent,
    ShowCardComponent,
    AddEditCardComponent,

    GeneratorComponent,
     CreateAccountComponent,
     ForgotPasswordComponent,
     LoginComponent,
     NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
