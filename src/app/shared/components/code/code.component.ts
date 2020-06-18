import { AfterViewInit, Component } from '@angular/core';
import { CodeService } from '../../..//core/http/code.service';
import { HighlightService } from '../../../core/services/highlight.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements AfterViewInit {
  code: string;
  constructor(private highlightService: HighlightService, private codeService: CodeService) {}

  ngAfterViewInit() {
    this.highlightService.initialize();
  }
}
