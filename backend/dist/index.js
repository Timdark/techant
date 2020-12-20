"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
var getData_1 = __importDefault(require("./rss/getData"));
var environment_1 = require("./environment");
//cron.schedule('* * * * *', () => {
getData_1["default"]();
//})
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers
});
// Server settings - cors allow all
var options = {
    port: environment_1.BACKEND_PORT,
    playground: environment_1.NODE_ENV === environment_1.PRODUCTION ? "false" : "/",
    cors: {
        creditials: false,
        origin: "*"
    }
};
server.start(options);
//# sourceMappingURL=index.js.map