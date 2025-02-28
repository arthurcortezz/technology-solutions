import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhoneMaskDirective } from '../directives/phone-mask.directive';

@NgModule({
  declarations: [PhoneMaskDirective],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  exports: [FormsModule, CommonModule, PhoneMaskDirective, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
