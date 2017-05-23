import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavVideoComponent } from './main/components/nav-video/nav-video.component';
import { NavContainersComponent } from './main/components/nav-containers/nav-containers.component';
import { NavPhotosComponent } from './main/components/nav-photos/nav-photos.component';
import { NavVideosComponent } from './main/components/nav-videos/nav-videos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthComponent } from './auth/auth.component';
import { TrainingsComponent } from './gennext/trainings/trainings.component';
import { WorkshopComponent } from './gennext/workshop/workshop.component';
import { GennextComponent } from './gennext/gennext.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auth', component: AuthComponent,
  children: [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'reset', component: ResetPasswordComponent },
   { path: 'logout', component: LogoutComponent },
   ]
  },
  { path: 'gennext', component: GennextComponent,
  children: [
   { path: 'training', component: TrainingsComponent },
   { path: 'workshop', component: WorkshopComponent },
   ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    NavBarComponent,
    NavFooterComponent,
    NavVideoComponent,
    NavContainersComponent,
    NavPhotosComponent,
    NavVideosComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    LogoutComponent,
    AuthComponent,
    TrainingsComponent,
    WorkshopComponent,
    GennextComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
