import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperComponent } from './super/super.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuperComponent],
  exports: [SuperComponent]
})
export class DekoModule { }
