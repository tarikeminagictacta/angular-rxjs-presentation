import { Component, OnInit } from '@angular/core';
import { TopicService } from '../core/http/topic.service';
import { Topic } from '../shared/models/topic.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'agenda.component.html',
})
export class AgendaComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicService, private router: Router) {}

  ngOnInit() {
    this.topicService.getAll().subscribe((topics) => (this.topics = topics));
  }

  navigateToTopic(topic: Topic) {
    this.router.navigate(['topics', topic.id]);
  }
}
