import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightService } from './core/services/highlight.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [
    HighlightService,
    {
      provide: APP_INITIALIZER,
      useFactory: (hs: HighlightService) => () => hs.initialize(),
      deps: [HighlightService],
      multi: true,
    },
  ],
})
export class AppModule {}
