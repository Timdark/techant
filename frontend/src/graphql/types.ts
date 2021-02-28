export type RssData = {
    id: number;
    siteName: String;
    title: String;
    linkUrl: String;
    date: String;
}

export type Query = {
    allRssData: RssData[];
}