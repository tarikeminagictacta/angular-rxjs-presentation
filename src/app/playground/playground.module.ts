import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayComponent } from './components/play.component';

@NgModule({
  imports: [CommonModule, SharedModule, PlaygroundRoutingModule],
  declarations: [PlayComponent],
})
export class PlaygroundModule {}
