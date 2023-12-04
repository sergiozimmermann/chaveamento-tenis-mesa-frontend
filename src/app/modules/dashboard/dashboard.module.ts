import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: DashboardComponent }])
    , ButtonModule
    , RippleModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
