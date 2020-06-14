import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-slide',
  templateUrl: 'header-slide.component.html',
  styleUrls: ['header-slide.component.scss'],
})
export class HeaderSlideComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;
  @Input() progress: string;
  @Input() backButtonText: string;
  @Output() backButtonClicked = new EventEmitter<MouseEvent>();

  goBack(event: MouseEvent) {
    this.backButtonClicked.emit(event);
  }
}
