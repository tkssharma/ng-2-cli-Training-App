import { HttpClientService } from './shared/http-client.service';
import { localStorageService } from './shared/localStorage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import {AuthModule}  from './auth/app.auth';
import {GennextModule} from './gennext/gennext.module';
import { DummyComponent } from './dummy/dummy.component';
const appRoutes: Routes = [
  { path: '', component: MainComponent },
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
    NavVideosComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpModule,
    AuthModule,
    GennextModule
  ],
  providers: [localStorageService,HttpClientService],
  bootstrap: [AppComponent]
})
 class AppModule { }

 export default AppModule;
