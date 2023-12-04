import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

@NgModule({
  imports: [
    CommonModule
    , ButtonModule
    , RippleModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
