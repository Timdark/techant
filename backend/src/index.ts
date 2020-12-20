import { GraphQLServer } from "graphql-yoga";
import { typeDefs, resolvers } from "./schema";
import cron from "node-cron";
import getRssData from "./rss/getData"
import {
    BACKEND_PORT,
    BACKEND_HOST,
    NODE_ENV,
    PRODUCTION
} from "./environment";

//cron.schedule('* * * * *', () => {
    getRssData();
//})

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});
  
// Server settings - cors allow all
const options = {
    port: BACKEND_PORT,
    playground: NODE_ENV === PRODUCTION ? "false" : "/",
    cors: {
        creditials: false,
        origin: "*"
    }
};

server.start(options);