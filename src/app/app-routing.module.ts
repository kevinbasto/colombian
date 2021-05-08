import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "news/:new",
    component: NewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
