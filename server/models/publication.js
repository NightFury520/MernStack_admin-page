const mongoose = require('mongoose')

const PublicationSchema = new mongoose.Schema({
  title:{
    type:String
  },
  description:{
    type:String
  },
  date:{
    type:String
  },
  link:{
    type:String
  }
})

module.exports = mongoose.model("Publication",PublicationSchema)