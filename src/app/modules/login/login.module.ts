import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: LoginComponent }])
    , FormsModule
    , ReactiveFormsModule
    , InputTextModule
    , ButtonModule
    , RippleModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
