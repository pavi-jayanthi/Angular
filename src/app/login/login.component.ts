import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.email]),
    upass:new FormControl("",[Validators.required])

  })

  get uemail(){
    return this.loginForm.get('uemail')
  }

  get upass(){
    return this.loginForm.get('upass')
  }

  login(){
    console.log(this.loginForm.value)
    let a =this.loginForm.value.uemail;
    let b=this.loginForm.value.upass;
    localStorage.setItem("uemail",a)
    localStorage.setItem("upass",b)
    // localStorage.setItem("uemail",JSON.stringify(this.uemail))
    // JSON.parse(localStorage.getItem('uemail'))
    // localStorage.setItem("upass",JSON.stringify(this.upass))
    // JSON.parse(localStorage.getItem('upass'))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
