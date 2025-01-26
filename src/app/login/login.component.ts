import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private _loginservice:LoginService,  private _router:Router){}

  login(){
    console.log(this.loginForm.value);
    this._loginservice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('login Sucessfully')
        sessionStorage.setItem("token",data.token)
        this._router.navigateByUrl("/dashboard")
      },(err:any)=>{
        alert('invalid credentials')
      }
    )
  }

}
