var mongoose = require("mongoose");
var PageSchema = require("./page.schema.server");
var PageModel = mongoose.model("PageModel", PageSchema);
var websiteModel = require("../website/website.model.server");
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

function createPage(websiteId, page) {
  return PageModel.create(page)
    //.then(function()
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_websiteId: websiteId})
}

function findPageById(pageId) {
  return PageModel.find({_id: pageId})
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId});
}

// createPage(websiteId, page)
// findAllPagesForWebsite(websiteId)
// findPageById(pageId)
// updatePage(pageId, page)
// deletePage(pageId)

module.exports = PageModel;
