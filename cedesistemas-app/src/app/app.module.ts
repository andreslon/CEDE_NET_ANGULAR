import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './material.module';
 
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import {  welcomePipe } from './shared/pipes/welcome-pipe';
import { RankingColorPipe } from './shared/pipes/rankingcolor-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    welcomePipe,
    RankingColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
