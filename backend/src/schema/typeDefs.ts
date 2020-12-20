export default `
    type RssData {
        id: ID!
        createdAt: String!
        updatedAt: String!
        siteName: String
        title: String
        linkUrl: String
        date: String
    }

    type Query {
        allRssData: [RssData]
    }
`;
