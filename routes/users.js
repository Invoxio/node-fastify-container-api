customElements = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require('../controllers/users.js');

// Item schema
const User = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    gender: { type: 'string' },
    ip_address: { type: 'string' },
  },
};

// Options for get all items
const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        users: User,
      },
    },
  },
  handler: getUsers,
};

const getUserOpts = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: getUser,
};

const postUserOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['first_name', 'last_name'],
      properties: {
        id: { type: 'number' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string' },
        gender: { type: 'string' },
        ip_address: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: addUser,
};

const deleteUserOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteUser,
};

const updateUserOpts = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: updateUser,
};

function userRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/users', getUsersOpts);

  // Get single items
  fastify.get('/users/:id', getUserOpts);

  // Add item
  fastify.post('/users', postUserOpts);

  // Delete item
  fastify.delete('/users/:id', deleteUserOpts);

  // Update item
  fastify.put('/users/:id', updateUserOpts);

  done();
}

module.exports = userRoutes;
