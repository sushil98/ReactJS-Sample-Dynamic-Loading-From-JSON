const { User, Movie,Actor,Director,AuthorDetails,Authors } = require('../models')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const randomstring = require("randomstring");
require('dotenv').config()

const resolvers = {



 AllAuthorDetails:{ 
  authors: (AuthorDetails, {}) =>  Authors.findAll({where:{authorDetailID:AuthorDetails.id,}}),   // tricky part to link query relation ship between User and Car
},

  Query: {

      authorDetails: () => AuthorDetails.findAll({}),
      isTrending:  (_,{isTrend}) =>  AuthorDetails.findAll({where:{isTrending:isTrend,}}),  
      openTask:() =>  AuthorDetails.findAll({where:{status:1}}),
      completeTask:() =>  AuthorDetails.findAll({where:{status:0}})
     
  },

  Mutation: {
   
async addAuthorDetailsResponse (root, {date, popularity, isTrending,title,description,numComments,thumbnail,codeSubmissionTotal,pledgeTotal,pledgeGoal,pledgerCount,status }) {     
      return AuthorDetails.create({
        date, popularity, isTrending,title,description,numComments,thumbnail,codeSubmissionTotal,pledgeTotal,pledgeGoal,pledgerCount,status
      })
    },

    async addAuthor (root, {name, picture, title,score,authorDetailID }) {      
      return Authors.create({
        name, picture, title,score,authorDetailID
      })
    }, 
  },

}
module.exports = resolvers