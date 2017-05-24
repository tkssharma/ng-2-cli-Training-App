import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { WorkshopComponent } from './workshop/workshop.component';
import {GennextComponent}  from './gennext.component';

const appRoutes: Routes = [
  { path: 'gennext', component: GennextComponent ,
  children: [
     { path: 'training', component: TrainingsComponent },
     { path: 'workshop', component: WorkshopComponent }
   ]
   },
];

@NgModule({
  declarations: [
GennextComponent,
TrainingsComponent,
WorkshopComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
})
export class GennextModule { }
