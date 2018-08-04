import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AufgabeOutComponent } from './aufgabe-out/aufgabe-out.component';
import { AufgabeListComponent } from './aufgabe-list/aufgabe-list.component';
import { AufgabeAskComponent } from './aufgabe-ask/aufgabe-ask.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AufgabeOutComponent, AufgabeListComponent, AufgabeAskComponent],
  exports: [AufgabeListComponent, AufgabeAskComponent]
})
export class AufgabeModule { }
