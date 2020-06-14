import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ANY } from 'src/app/shared/functions/any';
import { SlideProgress, TopicProgress } from 'src/app/shared/models/progress.model';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private key = 'topic-progress';
  private progressChanged$ = new Subject<void>();

  constructor() {}

  getProgress(): Observable<TopicProgress> {
    return of(this.viaLocalStorage());
  }

  getTopicCurrentProgress(topicId: string): Observable<number> {
    return this.getProgressForTopic(topicId).pipe(map(ANY.sumByKeys));
  }

  getSlideCurrentProgress(topicId: string, slideId: string): Observable<number> {
    return this.getProgressForTopic(topicId).pipe(map(ANY.getKey(slideId, 0)));
  }

  addToProgress(topicId: string, slideId: string) {
    const progress = this.viaLocalStorage();
    if (!progress[topicId]) {
      progress[topicId] = {};
    }
    if (!progress[topicId][slideId]) {
      progress[topicId][slideId] = 0;
    }
    progress[topicId][slideId]++;

    localStorage.setItem(this.key, JSON.stringify(progress));
    this.progressChanged$.next();
  }

  get progressChanged(): Observable<void> {
    return this.progressChanged$.asObservable();
  }

  private viaLocalStorage() {
    var jsonData = localStorage.getItem(this.key) || '{}';
    return JSON.parse(jsonData) as TopicProgress;
  }

  private getProgressForTopic(topicId: string): Observable<SlideProgress> {
    return this.getProgress().pipe(map((p) => p[topicId] || {}));
  }
}
