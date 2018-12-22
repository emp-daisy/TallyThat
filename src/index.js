import  express from 'express';
import graphqlHTTP from 'express-graphql';
import {} from 'dotenv/config';
// Construct a schema, using GraphQL schema language
import schema from "./schema";
// The root provides a resolver function for each API endpoint
import rootValue from "./resolver"
import { setupTables } from './database/create_tables';

const port = process.env.PORT || 4000;

setupTables();

const app = express();
app.use('/store', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split('\n') : [],
    path: error.path
  })
}));

app.listen(port);