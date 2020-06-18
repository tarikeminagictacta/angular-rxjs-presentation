import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { CodeService } from 'src/app/core/http/code.service';
import { TopicService } from 'src/app/core/http/topic.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { BaseSlide } from '../../base-slide';

@Component({
  selector: 'app-object-example',
  templateUrl: './object-example.component.html',
})
export class ObjectExampleComponent extends BaseSlide implements OnInit {
  code: { jsCode: string; tsCode: string };
  constructor(
    protected progressService: ProgressService,
    protected topicService: TopicService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    private codeService: CodeService
  ) {
    super(progressService, topicService, activatedRoute, router);
  }

  ngOnInit() {
    super.ngOnInit();
    forkJoin({
      jsCode: this.codeService.getCode('example-js-object'),
      tsCode: this.codeService.getCode('example-rxjs-object'),
    }).subscribe((code) => {
      this.code = code;
      this.runJsCode();
      this.runRxJSCode();
    });
  }

  runJsCode() {
    let data = {
      name: 'Tarik',
      profession: 'Developer',
    };

    console.log('Js result:', data);
  }

  runRxJSCode() {
    let data$ = of({
      name: 'Tarik',
      profession: 'Developer',
    });

    data$.subscribe((data) => console.log('RxJS result:', data));
  }
}
