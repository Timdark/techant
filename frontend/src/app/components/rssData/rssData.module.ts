import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLModule } from '../../graphql.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { RssDataComponent } from './rssData.component'

// Material ui components


@NgModule({
  declarations: [
    RssDataComponent
  ],
  imports: [
    CommonModule,
    GraphQLModule,
    HttpClientModule,
  ],
  exports: [
    RssDataComponent
  ],
  providers: [],
})
export class RssDataModule {}