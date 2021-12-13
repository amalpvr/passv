import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  public createAccountForm ! : FormGroup;

  constructor(private formBuilder  : FormBuilder , private http : HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group(
      {
        firstName:[''],
        lastName :[''],
        email:[''],
        password:['']
      }
    )
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/users",this.createAccountForm.value)
    .subscribe(res=>{
      alert("signup was successfull");
      this.createAccountForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong") 
    }
    )

  }

}
