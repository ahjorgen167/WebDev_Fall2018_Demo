var mongoose = require("mongoose");

var PageSchema = mongoose.Schema({
  _websiteId: { type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title:String,
  description: String,
  widgets: [String], //update with widgets when created
  dateCreated: {type: Date, default: Date.now}
}, {collection:'page'});

module.exports = PageSchema;

