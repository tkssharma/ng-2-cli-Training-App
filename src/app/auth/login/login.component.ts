  import {localStorageService} from './../../shared/localStorage.service';
  import {Component, OnInit, OnDestroy} from '@angular/core';
  import {Router} from '@angular/router';
  import {UserService} from './user.service';
  import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

  @Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
  export class LoginComponent implements OnInit,
  OnDestroy {

    public myForm : FormGroup;
    public submitted : boolean;
    public errorMessage : string;
    loggedIn = false;
    isLoggedIn : boolean;
    authentication_error = false;

    constructor(private _fb : FormBuilder, private router : Router, private userService : UserService, private localStorage : localStorageService) {
      this.isLoggedIn = localStorage.get(name);
    }
    ngOnInit() {
      this.myForm = this
        ._fb
        .group({
          userName: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(3)
            ]
          ],
          password: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(3)
            ]
          ]
        });

      this.loggedIn = this.userService.isUserLoggedIn();
      if (this.loggedIn) {
        this.router.navigate(['dashboard']);
      }
    }
    onSubmit(userData){
      this.isLoggedIn = true;
      this.userService.userLogin(userData).subscribe((response)=>{
      this.isLoggedIn = true;
      }, (err)=>{
      this.isLoggedIn = false;
      this.errorMessage = err[0];
      });
    }
    ngOnDestroy() {}

  }
