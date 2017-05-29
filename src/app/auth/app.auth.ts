import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthComponent} from './auth.component';
import {UserService} from './user.service'
const appRoutes : Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }, {
        path: 'reset',
        component: ResetPasswordComponent
      }, {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent, ResetPasswordComponent, LogoutComponent, AuthComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class AuthModule {}