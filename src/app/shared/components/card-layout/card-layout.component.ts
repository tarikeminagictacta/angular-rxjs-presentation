import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-layout',
  templateUrl: 'card-layout.component.html',
  styleUrls: ['card-layout.component.scss'],
})
export class CardLayoutComponent implements AfterViewInit {
  @ViewChild('container') elementView: ElementRef;

  singleColumn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateBreakpoints();
  }

  ngAfterViewInit() {
    this.calculateBreakpoints();
  }

  calculateBreakpoints() {
    setTimeout(() => {
      const shouldBeSingleColumn = this.elementView.nativeElement.offsetWidth < 1600;
      if (this.singleColumn.value != shouldBeSingleColumn) {
        this.singleColumn.next(shouldBeSingleColumn);
      }
    }, 0);
  }
}
