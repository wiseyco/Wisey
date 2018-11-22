const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const trainingCenterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  uri: {
    type: String,
    required: true,
    max: 40
  },
  companyName: {
    type: String,
  },
  logo: {
    type: String
  },
  dateOfEstablishment: {
    type: Date
  },
  desc: {
    type: String
  },
  certification: {
    type: [String]
  },
  expertise: {
    type: [String]
  },
  mainCustomers: {
    type: [String]
  },
  numberOfTrainers: {
    type: Number
  },
  lastYearTrainedPeople: {
    type: Number
  },
  satisfactionRating: {
    type: Number
  },
  social: {
    website: {
      type: String
    },
    linkedin: {
      type: String
    },
    twitter: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  pictures: [
    {
      imgUri: {
        type: String
      },
      pictureTitle: {
        type: String
      },
      pictureDesc: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TrainingCenter = mongoose.model('trainingcenters', trainingCenterSchema);