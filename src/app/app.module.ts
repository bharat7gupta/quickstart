import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';
import { DashboardComponent } from './dashboard.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent, HighlightDirective ],
  providers: [ HeroService, HeroSearchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
