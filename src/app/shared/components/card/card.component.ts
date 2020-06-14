import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() progress: number;

  @Output()
  public cardClick = new EventEmitter<MouseEvent>();

  public handleClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.cardClick.emit(event);
  }
}
