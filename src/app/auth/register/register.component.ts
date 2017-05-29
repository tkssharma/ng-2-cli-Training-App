import { Component, OnInit,OnDestroy } from '@angular/core';
  import {localStorageService} from './../../shared/localStorage.service';
  import {Router} from '@angular/router';
  import {UserService} from '../user.service';
  import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent implements OnInit, OnDestroy {

    public myRegForm : FormGroup;
    public submitted : boolean;
    public errorMessage : string;
    isLoggedIn : boolean;
    authentication_error = false;

    constructor(private _fb : FormBuilder, private router : Router, private userService : UserService, private localStorage : localStorageService) {
     this.isLoggedIn = !! (localStorage.get('token'));

    }
    ngOnInit() {
      this.myRegForm = this
        ._fb

        .group({
          userName: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(3)
            ]
          ],
           email: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(6)
            ]
          ],
           varifyPassword: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(6)
            ]
          ],
           phone: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(10)
            ]
          ],
          password: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(6)
            ]
          ]
        });

      this.isLoggedIn = this.userService.isUserLoggedIn();
      if (this.isLoggedIn) {
        this.router.navigate(['dashboard']);
      }
    }
    onSubmit(userData){
      this.userService.userRegister(userData).subscribe((response)=>{
      this.isLoggedIn = true;
      }, (err)=>{
      this.errorMessage = err[0];
      });
    }
    ngOnDestroy() {}

  }
