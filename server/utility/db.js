const mongoose = require('mongoose')
// const db_password="MI47Sd4G2d0ZDFWf"
const UrlString =
  'mongodb+srv://ramanprasad0203:WAFvaFDOrpGczLc5@test.c958j5f.mongodb.net/?retryWrites=true&w=majority&appName=test'
async function connectToDb() {
  try {
    await mongoose.connect(UrlString)
    console.log("Mongoose connected Successfully")
  } catch (e) {
    console.log('error', e)
  }
}

module.exports = connectToDb
