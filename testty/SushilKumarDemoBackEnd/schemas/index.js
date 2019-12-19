const { gql } = require('apollo-server-express')

const typeDefs = gql`
  directive @isAdmin on FIELD_DEFINITION
  type User {
    id: Int!
    username: String!
    email: String!
    isAdmin: Boolean!
    
  }

  type Authors{
    id:ID!
    name:String
    picture:String
    score:Float   
  }

  type AllAuthorDetails{    
    id:ID!
    date: String
    popularity: Int
    isTrending: Boolean	
    title: String
    description: String
    numComments: Int
    thumbnail: String
    codeSubmissionTotal: Int
    pledgeTotal: Float
    pledgeGoal: Float	
    pledgerCount: Int
    status: Boolean   
    authors: [Authors]

  }

  type AuthorDetails{    
    id:ID!
    date: String
    popularity: Int
    isTrending: Boolean	
    title: String
    description: String
    numComments: Int
    thumbnail: String
    codeSubmissionTotal: Int
    pledgeTotal: Float
    pledgeGoal: Float	
    pledgerCount: Int
    status: Boolean 
  }

  type LoginResponse{
    token: String!
    user: User
  }

  
type Query {    
    authorDetails: [AllAuthorDetails]
    isTrending(isTrend:Boolean): [AllAuthorDetails]
    openTask:[AllAuthorDetails]
    completeTask:[AllAuthorDetails]
  }
  
  type Mutation {
    
    addAuthorDetailsResponse(date:String!, popularity:Int!,isTrending:Boolean!,title:String!,description:String!,numComments:Int!,thumbnail:String!,codeSubmissionTotal:Int!, pledgeTotal:Float!,pledgeGoal:Float!,pledgerCount:Int!,status:Boolean!): AuthorDetails
       
    addAuthor(name:String!, picture:String!, title:String!,score:Float!,authorDetailID:Int!): Authors 
  }
`
module.exports = typeDefs