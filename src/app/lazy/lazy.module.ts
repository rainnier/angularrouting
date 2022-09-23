import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFourComponent } from './component-four/component-four.component';

@NgModule({
  declarations: [
    ComponentFourComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentFourComponent
  ]
})
export class LazyModule { }
