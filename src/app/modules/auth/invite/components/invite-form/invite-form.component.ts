import { MessageService } from 'primeng/api';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';

import { InvitesService } from '../../invite.service';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class InviteFormComponent {
  public form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private readonly service: InvitesService,
    private readonly messageService: MessageService,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.form.disable();
      this.service.create(this.form.value).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: response.message,
          });
          this.form.reset();
          this.form.enable();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error?.error?.message || 'Ocorreu um erro inesperado',
          });
          this.form.enable();
        },
      });
    }
  }
}
