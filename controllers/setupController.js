var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    // seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'water grass',
        isDone: false,
        hasAttachement: false
      },
      {
        username: 'test',
        todo: 'recycling',
        isDone: false,
        hasAttachement: false
      },
    ];
    Todos.create(starterTodos, function(err, results){
      res.send(results);
    })
  });
};
