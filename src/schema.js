import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
 # The Root Query type
  type Query {
    hello: String
    stockItem(id: Int!): Item
    stockItems(name: String): [Item]
    getUser(id: Int!): User
    getUserByUsername(name: String): [User]
  },
  type Mutation {
    updateItemQuantity(id: Int!, quantity: Int!): Item
    addNewStock(item: CreateStockItem!): Item
    updatePassword(id: Int!, password: String!): User
    createUser(user: CreateUser!): User
  }
  type Item {
    id: Int
    name: String
    quantity: Int
    description: String
    url: String
  }
  type User {
    id: Int
    fullname: String
    username: String
  }
  input CreateStockItem {
    name: String!
    quantity: Int!
    description: String!
    url: String
  }
  input CreateUser {
    username: String!
    fullname: String!
    password: String!
  }
`);

export default schema;