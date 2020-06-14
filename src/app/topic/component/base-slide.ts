import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { forkJoin, fromEvent, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { TopicService } from 'src/app/core/http/topic.service';
import { ProgressService } from 'src/app/core/services/progress.service';

export class BaseSlide implements OnInit, OnDestroy {
  private topicId: string;
  private id: string;
  private maxClicks: number;
  private onDestroy$ = new Subject<void>();
  currentClicks: number = 0;
  initialized: string;
  completed: boolean;

  constructor(
    protected progressService: ProgressService,
    protected topicService: TopicService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.onDestroy$),
        tap((data) => this.routeChanged(data))
      )
      .subscribe(() => this.fetchProgress());
    this.progressService.progressChanged.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.fetchProgress());
    fromEvent(document, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.moveProgress());
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  goTo(path: string[]) {
    this.router.navigate(path);
  }

  private routeChanged(data: Data): void {
    const { topicId, slideId } = data;
    this.topicId = topicId;
    this.id = slideId;
  }

  private fetchProgress(): void {
    forkJoin({
      currentClicks: this.progressService.getSlideCurrentProgress(this.topicId, this.id),
      maxClicks: this.topicService.getMaxSlideProgress(this.topicId, this.id),
    }).subscribe((data) => {
      this.currentClicks = data.currentClicks;
      this.maxClicks = data.maxClicks;
      this.initialized = this.topicId && this.id;
      this.completed = this.maxClicks <= this.currentClicks;
    });
  }

  private moveProgress(): void {
    this.initialized = this.topicId && this.id;
    this.completed = this.maxClicks <= this.currentClicks;
    if (this.initialized && !this.completed) this.progressService.addToProgress(this.topicId, this.id);
  }
}
