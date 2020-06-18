import { Injectable } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

@Injectable()
export class HighlightService {
  constructor() {}

  initialize() {
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('scss', scss);

    document.querySelectorAll('pre.code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}
