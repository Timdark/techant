import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const ALL_RSS_DATA = gql`
query allRssData {
  allRssData {
    id
    title
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rssData: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.query({
      query: gql`
      query allRssData {
        allRssData {
          id
          title
        }
      }`
    }).subscribe(({ data, loading }) => {
      console.log(data);
      this.rssData = data;
    });
  }
}
