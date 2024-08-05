const typeDefs = `
 type User {
  _id: ID!
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: String!
  authors: [String]
  description: String
  title: String!
  image: String
  link: String
}

type Auth {
  token: String!
  user: User!
}

  type Mutation {
    createUser(username: String!,  email: String!, password: String!): createUser
     login(username: String!,  email: String!, password: String!):login ,
     saveBook(bookId: String!, authors: [String], description: String, title: String,
     image: String, title:String!):saveBook ,
      deleteBook(bookId: String!, authors: [String], description: String, title: String,
     image: String, title:String!): deleteBook
  }
`;

module.exports = typeDefs;
