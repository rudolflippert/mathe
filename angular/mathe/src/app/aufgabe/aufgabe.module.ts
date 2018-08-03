import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AufgabeOutComponent } from './aufgabe-out/aufgabe-out.component';
import { AufgabeListComponent } from './aufgabe-list/aufgabe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AufgabeOutComponent, AufgabeListComponent],
  exports: [AufgabeListComponent]
})
export class AufgabeModule { }
