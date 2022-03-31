import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DefaultModule } from './layouts/default/default.module';
import { PagesComponent } from './modules/pages/pages.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CommonModule,
    DefaultModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AdminModule {}
