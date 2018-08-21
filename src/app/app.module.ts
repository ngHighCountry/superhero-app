import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HerosComponent } from './components/heros/heros.component';
import { SearchComponent } from './components/search/search.component';
import { HeroService } from './services';

@NgModule({
  declarations: [AppComponent, SearchComponent, HerosComponent, HeroComponent],
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
