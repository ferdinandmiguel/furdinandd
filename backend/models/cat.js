// filepath: c:\Users\Miguel Perico\websys_project\backend\models\cat.js
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  description: { type: String, required: true },
  rescue_date: { type: Date, required: true },
  health_status: { type: String, required: true },
  adopted: { type: String, required: true },
  image: { type: String }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;