import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './material.module';
 
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
 
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';



import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {  TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UsersModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
