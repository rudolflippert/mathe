import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserSelectionComponent, UserHeaderComponent],
  exports: [UserSelectionComponent, UserHeaderComponent]
})
export class UserModule { }
