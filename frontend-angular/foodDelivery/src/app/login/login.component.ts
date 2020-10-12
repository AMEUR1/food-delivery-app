import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  loginForm : FormGroup

  constructor(private formBuilder: FormBuilder,private _auth : AuthServiceService, private _route : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  loginBtn(){
    this.loginUserData= this.loginForm.value
    console.log(this.loginUserData)

    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
          console.log("Succes Login "+ res)
          this._route.navigate(['/menu'])
      },
      err => {
        console.log("Failed Login ")
        console.log(err)
        
      }
    )
  }

}
