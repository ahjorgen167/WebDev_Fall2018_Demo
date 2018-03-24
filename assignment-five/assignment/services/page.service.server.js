module.exports = function (app) {

  var pageModel = require("../models/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPage);
  app.put("/api/page/:pageId", updatePage);
  app.put("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;
    page.websiteId = websiteId;
    pageModel.createPage(websiteId, page)
      .then(function(response){
        console.log(response);
        res.status(200).send(response);
      });
  }

  function findPage(req, res) {
    var pageId = req.params.pageId;
    pageModel.findPageById(pageId)
      .then(function(page) {
        res.status(200).json(page);
      }, function(err) {
        console.log(err);
        res.status(500);
      })
  }

  function whatever(whatever) {
    res.send(200).json(pages);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    pageModel.findAllPagesForWebsite(websiteId)
      .then(whatever, function(err) {
        res.send(500);
      })
  }

  function deletePage(req, res) {
    var pageId = req.params.pageId;
    pageModel.deletePage(pageId)
      .then(function(response){
        res.send(200).json(response);
      }, function(err) {
        console.log(err);
        res.send(500);
      });
  }

  function updatePage(req, res) {
    var pageId = req.params.pageId;
    var page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function (response) {
        res.send(200).json(response);
      }, function(err) {
        console.log(err);
        res.send(500);
      })
  }

};

