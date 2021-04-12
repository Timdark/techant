import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { RssDataModule } from './components/rssData/rssData.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BottombarComponent } from './components/bottombar/bottombar.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottombarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    RssDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
