import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {



  public loginForm!: FormGroup
  constructor(private formBuilder :  FormBuilder, private http : HttpClient, private router : Router, public service:SharedService) {}

  ngOnInit(): void {
    this.service.hide();
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']

    })

  }
  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user){
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['logindet'])

      }
      else{
        alert(" user not found");
      }

    },err=>{
      alert("Somethging went wrong!!")
    }
    )

  }

}
