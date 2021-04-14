import {Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

import format from 'date-fns/format'

@Component({
  selector: 'rssData',
  styleUrls: ['rssData.component.scss'],
  templateUrl: 'rssData.component.html',
})
export class RssDataComponent implements OnInit {
  rssDataRaw: any;
  rssData: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.query({
      query: gql`
      query allRssData {
        allRssData {
          id
          siteName
          siteIcon
          title
          linkUrl
          date
        }
      }`
    }).subscribe(({ data, loading }) => {
      console.log('wrapper', data);
      this.rssDataRaw = data;
      // Parse data
      this.rssDataRaw.allRssData.map(x => {
        this.rssData.push({
          id: x.id,
          siteName: x.siteName,
          siteIcon: x.siteIcon,
          title: x.title,
          linkUrl: x.linkUrl,
          date: format(new Date(parseInt(x.date)), 'dd/MM/yyyy p')
        })
      })
    });
  }
}