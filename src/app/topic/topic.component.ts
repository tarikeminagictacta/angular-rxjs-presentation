import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { TopicService } from '../core/http/topic.service';
import { ProgressService } from '../core/services/progress.service';
import { Topic } from '../shared/models/topic.model';

@Component({
  templateUrl: 'topic.component.html',
})
export class TopicComponent implements OnInit, OnDestroy {
  private topicId: string;
  private onDestroy$ = new Subject<void>();

  private transformDataToTopic = (data: any) => {
    const progress = 10;
    return Object.assign(data.topic, { progress });
  };
  topic: Topic;

  constructor(
    private topicService: TopicService,
    private progressService: ProgressService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.onDestroy$),
        tap((d) => (this.topicId = d.topicId))
      )
      .subscribe(() => this.fetchData());
    this.progressService.progressChanged.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.fetchData());
  }

  goToAgenda(): void {
    this.router.navigate(['agenda']);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private fetchData() {
    forkJoin({
      topic: this.topicService.get(this.topicId),
      currentProgress: this.progressService.getTopicCurrentProgress(this.topicId),
      maxProgress: this.topicService.getMaxTopicProgress(this.topicId),
    }).subscribe((data) => {
      const progress = (data.currentProgress / data.maxProgress) * 100;
      this.topic = Object.assign({}, data.topic, { progress });
    });
  }
}
