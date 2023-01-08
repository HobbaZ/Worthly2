const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    savedItems: [Item]
  }

  input updateItem {
    itemImages: String
    purchasePrice: Float
    purchaseDate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID): User
    me: User
  }

  type Item {
    _id: ID
    itemImages: String!
    itemName: String!
    purchasePrice: Float!
    purchaseDate: String!
    price: Float!
    profit: Float!
    quantity: Int!
    percent: Float!
    
  }

  input itemInput {
    _id: ID
    itemImages: String
    itemName: String
    purchasePrice: Float
    purchaseDate: String
    price: Float
    profit: Float
    quantity: Int
    percent: Float
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(username: String, email: String): User

    deleteUser: User 

    login(email: String!, password: String!): Auth

    #saveItem(item: itemInput): User

    deleteItem(_id: ID): Item 

    updateItem(_id: ID, itemName: String!, itemImages: String!, purchaseDate: String!): Item 

    saveItem(purchasePrice: Float!, price: Float!, itemName: String!, percent: Float!, profit: Float!, quantity: Int!, itemImages: String!, purchaseDate: String!): Item
  }
`;

module.exports = typeDefs;
