import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentesModule { }
