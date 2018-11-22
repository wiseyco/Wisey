const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const courseSchema = new Schema({
 trainingcenter: {
   type: Schema.Types.ObjectId,
   ref: 'trainingcenters'
 },
 title: {
   type: String,
   required: true
 },
 handle: {
   type: String
 },
 punchline: {
   type: String
 },
 desc: {
   type: String
 },
 delivery: {
   type: String
 },
 targetedAudience: {
   type: [String]
 },
 price: {
   type: Number,
   required: true
 },
 cpf: {
   type: Boolean
 },
 duration: {
   time: {
     type: Number
   },
   unit: {
     type: String
   }
 },
 syllabus: [
   {
     title: {
       type: String
     },
     desc: {
       type: String
     }
   }
 ],
 targetedLevel: {
   type: String
 },
 categories: {
   type: [String]
 },
 requirements: {
   type: String
 },
 ref: {
   type: String
 },
 ratings: [
   {
     user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
     },
     stars: {
       types: Number
     },
     name: {
       type: String
     },
     comment: {
       type: String
     },
     date: {
       type: Date,
       default: Date.now
     }
   }
 ],
 nextSessions: [
   {
     from: {
       type: Date,
       default: Date.now
     },
     to: {
       type: Date,
       default: Date.now
     },
     location: {
       adress: String
     }
   }
 ],
 date: {
   type: Date,
   default: Date.now
 }
});

module.exports = Course = mongoose.model('courses', courseSchema);