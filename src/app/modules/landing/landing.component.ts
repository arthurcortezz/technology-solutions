import { Subject } from 'rxjs';
import { OnInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['landing.styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
