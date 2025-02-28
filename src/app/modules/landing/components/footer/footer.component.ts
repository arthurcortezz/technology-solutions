import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingFooterComponent {
  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
