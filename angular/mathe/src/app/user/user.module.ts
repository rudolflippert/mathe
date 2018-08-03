import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectionComponent } from './user-selection/user-selection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserSelectionComponent],
  exports: [UserSelectionComponent]
})
export class UserModule { }
