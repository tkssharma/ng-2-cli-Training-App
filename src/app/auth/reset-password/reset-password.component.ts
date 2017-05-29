import { Component, OnInit } from '@angular/core';
  import {localStorageService} from './../../shared/localStorage.service';
  import {Router} from '@angular/router';
  import {UserService} from '../user.service';
  import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

isLoggedIn : boolean;
myAuthForm : FormGroup;
  constructor(private _fb:FormBuilder, private router:Router, private userService:UserService,private localStorageService : localStorageService ) {
          this.isLoggedIn = localStorageService.get(name);
   }

    ngOnInit() {
      this.myAuthForm = this
        ._fb
        .group({
          email: [
            '',
            [ < any > Validators.required, < any > Validators.minLength(3)
            ]
          ]
        });

      this.isLoggedIn = this.userService.isUserLoggedIn();
      if (this.isLoggedIn) {
        this.router.navigate(['dashboard']);
      }
    }

    submitForm(form){

    }

}
