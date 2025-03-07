import { MessageService } from 'primeng/api';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';

import { ContactsService } from '../../../../../app/modules/contacts/contacts.service';

@Component({
  selector: 'app-landing-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingContactComponent implements OnInit {
  public form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private readonly service: ContactsService,
    private readonly messageService: MessageService,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.form.value.phone = this.removeMask(this.form.value.phone);
      this.service.create(this.form.value).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: response.message,
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error?.error?.message || 'Ocorreu um erro inesperado',
          });
        },
      });
    }
  }

  removeMask(value: string): string {
    const newValue = value.replace(/\D/g, '');
    return newValue;
  }

  onCaptchaResolved(response: Event): void {
    this.form.controls['recaptcha'].setValue(response);
  }
}
