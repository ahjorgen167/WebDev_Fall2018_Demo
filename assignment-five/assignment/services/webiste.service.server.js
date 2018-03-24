module.exports = function(app){
  var WEBSITES = require("./website.mock.server");

  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);

  var websiteModel = require('../models/website/website.model.server');
  var userModel = require('../models/user/user.model.server');
  function updateWebsiteById(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    console.log(newWebSite);
    websiteModel.updateWebsite(websiteId, newWebSite)
      .then(function (status){
        console.log(status)
        websiteModel.findWebsitesForUser(userId)
          .then(function (websites){
            res.json(websites);
          })
      }, function(err){
        console.log(err);
      });
  }

  function findWebsiteById(req, res){
    var user = req.params['userId'];
    var websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
      res.status(200).json(website);
    }, function(err) {
        console.log(err);
        res.status(500).json(err);
      });
  }

  function deleteWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function(response) {
        userModel.findUserById(userId)
          .then(function(user) {
            for(var i = 0; i < user.websites.length; i++) {
              var curWebsite = user.websites[i];
              if (curWebsite._id === websiteId) {}
              user.websites = user.websites.splice(i, 1);
            }
            userModel.updateUser(userId, user);
          })
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500).json(err);
    })

  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    console.log(req);
    website.developerId = userId;
    delete website._id;
    websiteModel.createWebsite(website)
      .then(function (website){
        websiteModel.findWebsitesForUser(userId)
          .then(function (websites){
            res.json(websites);
          })
      }, function(err){
        console.log(err);
      });
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findWebsitesForUser(userId)
      .then(function(websites){
        res.json(websites);
      })
    // var websites= getWebsitesForUserId(userId);
    // res.json(websites);
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
