import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeroService } from './services';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, HeroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
