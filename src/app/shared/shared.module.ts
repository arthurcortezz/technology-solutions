import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { CpfMaskDirective } from '../directives/cpf-mask.directive';

@NgModule({
  declarations: [PhoneMaskDirective, CpfMaskDirective],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    CommonModule,
    CpfMaskDirective,
    PhoneMaskDirective,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class SharedModule {}
