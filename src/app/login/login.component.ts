import { User } from './../models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    readonly service: LoginService,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.loginForm.status==="VALID"){
      let user: User = this.loginForm.value;
     this.service.checkLogin(user);
    }
    else{
      alert("Niepoprawny login i haslo");
    }
}
}
