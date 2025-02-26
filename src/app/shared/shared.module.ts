import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  exports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
