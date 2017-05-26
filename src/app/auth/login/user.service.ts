  import { Request, Response } from '@angular/http';
  import { Injectable } from '@angular/core';
  import {HttpClientService} from '../../shared/http-client.service';
  import { localStorageService } from '../../shared/localStorage.service';
  import {Router} from '@angular/router';
  @Injectable()
  export class UserService {
    private loggedIn = false;
    private token;
    public END_POINT: string;

    constructor(private httpService:HttpClientService,private router:Router, private localStoarge :localStorageService){
      this.loggedIn = !!localStoarge.get('token');
      this.token = localStoarge.get('token');
    }

    userLogin(user){
      const loginUrl = `${this.END_POINT}user/login`;
      const loginData = {
        'username': user.userName,
        'password': user.password
      };
      return this.httpService.post(loginUrl,loginData).map((response: Response) => {
          let res=response.json();
          if (res) {
            this.loggedIn = true;
            this.localStoarge.set('token', res.token);
            this.localStoarge.set('name', res.user.name);
            this.localStoarge.set('uid', res.user.uid);
            this.localStoarge.set('mail', res.user.mail);
          }
      });
    }

    getUserdetails(token){
      const loginUrl = `${this.END_POINT}user`;
      return this.httpService.get(loginUrl).map((response: Response) => {
          let res=response.json();
          if (res) {
            this.localStoarge.set('token', res.token);
            this.localStoarge.set('name', res.user.name);
            this.localStoarge.set('uid', res.user.uid);
            this.localStoarge.set('mail', res.user.mail);
          }
      });
    }
    logout(){
      const logoutUrl = `${this.END_POINT}user/logout`;
      return this.httpService.get(logoutUrl).map((response: Response) => {
          this.localStoarge.clearAll();
          this.loggedIn = false;
          this.router.navigate(['']);
      });
    }
    isUserLoggedIn() {
      return this.loggedIn;
    }

  }