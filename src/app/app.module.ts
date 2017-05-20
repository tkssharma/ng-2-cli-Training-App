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
import { NavVideoComponent } from './nav-video/nav-video.component';
import { NavContainersComponent } from './main/components/nav-containers/nav-containers.component';
import { NavPhotosComponent } from './main/components/nav-photos/nav-photos.component';
import { NavVideosComponent } from './main/components/nav-videos/nav-videos.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
