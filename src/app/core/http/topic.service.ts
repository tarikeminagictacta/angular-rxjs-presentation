import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { ANY } from '../../shared/functions/any';
import { Topic } from '../../shared/models/topic.model';

export const TOPIC = {
  getWithFallback: (fallBack: () => Observable<Topic[]>) => (topics: Topic[]) =>
    topics.length ? of(topics) : fallBack(),
};

@Injectable({ providedIn: 'root' })
export class TopicService {
  private topics$: BehaviorSubject<Topic[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Topic[]> {
    return this.topics$.asObservable().pipe(switchMap(TOPIC.getWithFallback(this.getAllViaHttp.bind(this))));
  }

  get(id: string): Observable<Topic> {
    return this.getAll().pipe(
      flatMap((x) => x),
      first((t) => t.id === id)
    );
  }

  getMaxTopicProgress(topicId: string): Observable<number> {
    return this.get(topicId).pipe(map(ANY.getKey('slides', [])), map(ANY.sumByKeys));
  }

  getMaxSlideProgress(topicId: string, slideId: string): Observable<number> {
    return this.get(topicId).pipe(map((t) => t.slides[slideId]));
  }

  private getAllViaHttp(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>('/api/topics.json').pipe(tap((topics) => this.topics$.next(topics)));
  }
}
