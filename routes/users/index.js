// const bcrypt = require('bcryptjs');
// const { isLoggedIn } = require('../../middleware/isLoggedIn');
// Item schema

const getUsers = require('./getUsers');
const getUser = require('./getUser');
const addUser = require('./addUser');
const deleteUser = require('./deleteUser');
const updateUser = require('./updateUser');

const routes = async (fastify) => {
  // your routes code here

  // get all users
  fastify.get('/', getUsers);

  // get a single user
  fastify.get('/:id', getUser);

  // add a user
  fastify.post('/', addUser);

  // Delete user
  fastify.delete('/:id', deleteUser);

  // Update user
  fastify.put('/:id', updateUser);
};

module.exports = routes;
