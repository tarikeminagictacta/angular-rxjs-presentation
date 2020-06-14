import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
  @Input()
  disabled: boolean;
  @Output()
  buttonClick = new EventEmitter<MouseEvent>();

  handleClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.buttonClick.emit(event);
  }
}
