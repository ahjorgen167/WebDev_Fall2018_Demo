module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);

  function updateUser(req, res){
    var userId = req.params.userId;
    var user = req.body;

    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      })
  }

  function createUser(req, res){
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      })
  }

  function findUserById(req, res){
    var userId = req.params["userId"]
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }

  function findAllUsers(req, res){
    res.json(users);
  }

  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
      });
    } else if (username){
      userModel.findUserByUserName(username)
        .then(function(user){
          res.json(user);
        })
    } else {
      userModel.findAllUsers()
        .then(function(users) {
          console.log(user);
          res.status(200).json(users);
        })
    }
  }

}
