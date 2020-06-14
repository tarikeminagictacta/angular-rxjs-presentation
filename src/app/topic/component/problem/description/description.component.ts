import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from 'src/app/core/http/topic.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { BaseSlide } from '../../base-slide';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
})
export class DescriptionComponent extends BaseSlide {
  constructor(
    protected progressService: ProgressService,
    protected topicService: TopicService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    super(progressService, topicService, activatedRoute, router);
  }
}
