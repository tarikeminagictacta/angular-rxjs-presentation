import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: 'progress.component.html',
  styleUrls: ['progress.component.scss'],
})
export class ProgressComponent {
  @HostBinding('style.width.%')
  @Input()
  progress: number;

  @HostBinding('class')
  hostClass = 'progress';
}
