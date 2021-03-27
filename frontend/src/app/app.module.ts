import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// Material ui components
import {MatToolbarModule} from '@angular/material/toolbar';

// Components
import { RssDataModule } from './components/rssData/rssData.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MatToolbarModule,
    RssDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
