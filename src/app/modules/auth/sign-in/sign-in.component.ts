import { finalize } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthSignInComponent implements OnInit {
  public signInForm!: UntypedFormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn(): void {
    this.signInForm.disable();

    this.authService
      .signIn(this.signInForm.value)
      .pipe(
        finalize(() => {
          this.signInForm.enable();
        })
      )
      .subscribe({
        next: () => {
          const redirectURL =
            this.activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
            '/-';
          this.router.navigateByUrl(redirectURL);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error.message,
          });
        },
      });
  }
}
