var mongoose = require('mongoose');

var websiteSchema = mongoose.Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  created: {type: Date, default: Date.now}
}, {collection: 'website'})

module.exports = websiteSchema;
