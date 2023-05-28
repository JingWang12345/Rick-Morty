import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SComponent } from './s/s.component';
import { RickAndMortyServiceComponent } from './service/rick-and-morty-service/rick-and-morty-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SComponent,
    RickAndMortyServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
