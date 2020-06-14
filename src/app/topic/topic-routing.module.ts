import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './component/problem/description/description.component';
import { ObjectExampleComponent } from './component/problem/object-example/object-example.component';
import { TopicComponent } from './topic.component';

const routes: Routes = [
  {
    path: 'problem',
    component: TopicComponent,
    data: { topicId: 'problem' },
    children: [
      { path: '', redirectTo: 'description', pathMatch: 'full' },
      { path: 'description', component: DescriptionComponent, data: { topicId: 'problem', slideId: 'description' } },
      {
        path: 'object-example',
        component: ObjectExampleComponent,
        data: { topicId: 'problem', slideId: 'object-example' },
      },
    ],
  },
  { path: 'definition', component: TopicComponent, data: { topicId: 'definition' } },
  { path: 'angular', component: TopicComponent, data: { topicId: 'angular' } },
  { path: 'http-cookbook', component: TopicComponent, data: { topicId: 'http-cookbook' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicRoutingModule {}
