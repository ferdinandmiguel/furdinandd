// filepath: c:\Users\Miguel Perico\websys_project\backend\models\dog.js
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  description: { type: String, required: true },
  rescue_date: { type: Date, required: true },
  health_status: { type: String, required: true },
  adopted: { type: String, required: true },
  image: { type: String }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;