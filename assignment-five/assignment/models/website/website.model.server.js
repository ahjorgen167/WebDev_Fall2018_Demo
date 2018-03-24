var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

var userModel = require("../user/user.model.server");

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesForUser = findWebSitesForUser;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.deleteWebsite = deleteWebsite;
module.exports = WebsiteModel;

function findWebSitesForUser(userId){
  return WebsiteModel.find({"developerId": userId})
    .populate('developerId', 'username')
    .exec();
}

function createWebsite(website){
  return WebsiteModel.create(website)
    .then(function(responseWebsite){
      userModel.findUserById(website.developerId)
        .then(function(user){
          user.websites.push(responseWebsite);
          return user.save();
        })
    });
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.remove({_id: websiteId});
}

