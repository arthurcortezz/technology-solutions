import { Subject } from 'rxjs';
import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { InvitesService } from '../invite/invite.service';
import { InviteInterface } from '../invite/invite.interface';
import { UserService } from 'src/app/core/user/user.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit {
  private unsubscribeAll: Subject<any> = new Subject<any>();

  public form!: UntypedFormGroup;

  constructor(
    private readonly route: Router,
    private readonly service: InvitesService,
    private readonly userService: AuthService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      city: ['', Validators.required],
      neighborhood: ['', Validators.required],
      street: ['', Validators.required],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      const token = params.get('token');
      if (!token) {
        return;
      }
      this.service.findOne(token).subscribe((invite) => {
        this.form.patchValue({
          email: invite.email,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  signUp(): void {
    if (this.form.invalid) {
      return;
    }

    const data = this.form.getRawValue();
    this.userService.signUp(data).subscribe(() => {
      this.route.navigate(['/']);
    });
  }

  goBack(): void {
    this.route.navigate(['/']);
  }
}
