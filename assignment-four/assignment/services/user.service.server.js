module.exports = function(app) {
  var users = [
    {id: 123, firstName: "Bob", lastName: "Name"},
    {id: 456, firstName: "Helen", lastName: "Grr"},
    {id: 789, firstName: "George", lastName: "Blarg"}
  ]


  app.get('/api/users', function(req, res) {
    res.send(users);
  });


  app.get("/api/user/:userId", findUserById);

  function findUserById(req, res) {

    var userId = req.params["userId"];
    var user = users.find(function(user) {
      return user.id == userId;
    })
    res.send(user);
  }

};
