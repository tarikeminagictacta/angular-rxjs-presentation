import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './component/problem/description/description.component';
import { ObjectExampleComponent } from './component/problem/object-example/object-example.component';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';

@NgModule({
  declarations: [TopicComponent, DescriptionComponent, ObjectExampleComponent],
  imports: [CommonModule, SharedModule, TopicRoutingModule],
})
export class TopicModule {}
