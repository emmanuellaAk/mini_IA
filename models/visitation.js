const mongoose = require ('mongoose')
const visitationSchema = mongoose.Schema(
  {
  patientID: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: [true, 'ID feild is required']
  },
   Time: {
    type: String,
    required: true
  },encounterType : [Emergerncy/OPD/Specialist/Care]

},
{
  timestamp:true
})

const visitation = mongoose.model('visitation',visitationSchema)
module.exports = visitation;