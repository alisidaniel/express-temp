import express, { Application, RequestHandler } from "express";
import http from "http";
import config from "./config/config";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { graphqlHTTP } from "express-graphql";
import mockData from "./mockData.json";
import { schema } from "./schemas";

const app: Application = express();
const httpServer = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

try {
  httpServer.listen(config.server.port, () => {
    console.info(`Server running on port: ${config.server.port}`);
  });
} catch (err) {
  console.log(err);
}
