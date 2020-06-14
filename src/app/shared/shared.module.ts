import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { CardComponent } from './components/card/card.component';
import { HeaderSlideComponent } from './components/header-slide/header-slide.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideComponent } from './components/slide/slide.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    SlideComponent,
    HeaderSlideComponent,
    CardLayoutComponent,
    CardComponent,
    AvatarComponent,
    TitleComponent,
    ProgressComponent,
    ButtonComponent,
  ],
  declarations: [
    SlideComponent,
    HeaderSlideComponent,
    CardLayoutComponent,
    CardComponent,
    AvatarComponent,
    TitleComponent,
    ProgressComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
