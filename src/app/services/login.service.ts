import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: boolean = false;

  constructor(
    readonly http: HttpClient,
    private router: Router,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  checkLogin(user) {
    console.log("wartos:"+this.loggedIn);
    let users: User[];
    let login = user.login;
    let password = user.password;
    this.getUsers().subscribe(
      res => {
        users = res;
        for (let i=0; i<users.length; i++){
          if(login===users[i].name && password===users[i].password){
            console.log("zalogowany");
            if(login==="admin"){
              console.log("Zalogowany jako admin");
              this.loggedIn=true;
              this.router.navigate(['/admin-list']);
            }
          }
          else{
          console.log("Nie ma takiego uzytkownika lub zle haslo");
          }
        }

      });



  }
}
