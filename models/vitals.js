const mongoose = require ('mongoose')
const vitalSchema = mongoose.Schema(
  {
  bloodPressure: {
    type: String,
    required: true
  },
  Temparature: {
    type: String,
    required: true
  },
   Pulse: {
    type: String,
    required: true
  },SP02: {
    type: Number,
    required: true
  }

},
{
  timestamp:true
})

const vitals = mongoose.model('vitals',vitalSchema)
module.exports = vitals;