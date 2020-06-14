import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'playground', loadChildren: () => import('./playground/playground.module').then((m) => m.PlaygroundModule) },
  { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then((m) => m.AgendaModule) },
  { path: 'topics', loadChildren: () => import('./topic/topic.module').then((m) => m.TopicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
