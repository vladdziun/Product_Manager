const controllers = require('./controllers.js');

module.exports = app => {
  app
    .get('/api/products', controllers.getAll)
    .get('/api/products/:id', controllers.getOne)
    .post('/api/products', controllers.create)
    .put('/api/products/:id', controllers.update)
    .delete('/api/products/:id', controllers.deleteOne)
    .delete('/api/products', controllers.deleteAll)
}