import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name-validator';
import { PasswordValidator } from '../shared/password-validator';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  userDataRegister = {}
  errorsMsg : String

  constructor(private formBuilder: FormBuilder, private _route: Router, private _auth : AuthServiceService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      userName : ['ameur',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/)]],
      phone : ['0000000000000',[Validators.required,Validators.minLength(10)]],
      email : ['mehdiameur97@gmail.com',[Validators.required]],
      password : ['123456789',[Validators.required]],
      confirmPassword : ['123456789',[Validators.required]],
      address : this.formBuilder.group({
        city : ['Casablanca'],
        zip : ['444'],
        country : ['']
      }),
      role : 1

    }, {validators : PasswordValidator})
  }


  // onSubmit(){
  //   this.userDataRegister=this.registerForm.value
  
  //   console.log(this.userDataRegister)

  // }

  onSubmit(){
    //console.log(this.userDataRegister);
    console.log(this.registerForm.value);
    this.userDataRegister=this.registerForm.value
    this._auth.registerUser(this.userDataRegister)
    .subscribe(
      res =>{  
        console.log("this is good registration")
        console.log(res+"succes on register")
        
        // localStorage.setItem('token',res.token)
        this._route.navigate(['/menu'])
      },
      err =>{ 
         console.log(err.error)
         this.errorsMsg=err.error
         console.log("this is error")
      }
   )
  }

  get userName(){
    return this.registerForm.get('userName')
  }

  get phone(){
    return this.registerForm.get('phone')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword')
  }

}
