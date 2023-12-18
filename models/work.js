const mongoose = require ('mongoose')
const workSchema = mongoose.Schema(
  {
  Surname: {
    type: String,
    required: true
  },
  patientID: {
    type: Number,
    required: [true, 'ID feild is required']
  },
  Othernames: {
    type: String,
    required: true
  },phoneNumber : {
    type: String,
    required: true
  }, gender: {
    type : String,
    required: true
  }, ResidentialAddress : {
     type: String,
     required: true
  }, emergencyName : {
    type: String,
    required: true
  },Relashionship: {
    type: String,
    required: true
  }


},
{
  timestamp:true
})

const Hospital = mongoose.model('Hospital',workSchema)
module.exports = Hospital;