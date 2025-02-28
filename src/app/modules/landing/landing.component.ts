import { Subject } from 'rxjs';
import { OnInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
