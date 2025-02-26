import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppLandingHeaderComponent implements OnInit {
  constructor(private readonly _router: Router) {}
  ngOnInit(): void {}

  clickHandler(field: string): void {
    this._router.navigate([field]);
  }
}
